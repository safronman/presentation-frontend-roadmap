<script setup lang="ts">
import { computed, ref } from 'vue'
import { onSlideEnter } from '@slidev/client'
import { motion } from 'motion-v'

const props = defineProps<{
  path: string
  slideId: number
  color?: string
}>()

const animationRun = ref(0)
const clipId = computed(() => `roadmap-line-clip-${props.slideId}-${animationRun.value}`)

onSlideEnter(() => {
  animationRun.value += 1
})
</script>

<template>
  <svg class="roadmap-line" viewBox="0 0 1920 1080" aria-hidden="true">
    <defs>
      <clipPath :id="clipId">
        <motion.rect
          :key="`clip-${slideId}-${animationRun}`"
          x="0"
          y="0"
          height="1080"
          :initial="{ width: 0 }"
          :animate="{ width: 1920 }"
          :transition="{ duration: 2.4, ease: 'easeInOut' }"
        />
      </clipPath>
    </defs>

    <motion.path
      :key="`line-${slideId}-${animationRun}`"
      :d="path"
      fill="none"
      :stroke="color ?? '#7c3aed'"
      stroke-width="5"
      stroke-linecap="round"
      stroke-dasharray="24 18"
      :clip-path="`url(#${clipId})`"
      :initial="{ strokeDashoffset: 42, opacity: 0.25 }"
      :animate="{ strokeDashoffset: 0, opacity: 1 }"
      :transition="{ duration: 2.4, ease: 'easeInOut' }"
    />
  </svg>
</template>

<style scoped>
.roadmap-line {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}
</style>
