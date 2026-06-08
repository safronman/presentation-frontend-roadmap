<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'

const props = defineProps<{
  path: string
  slideId: number
}>()

const animationKey = computed(() => `line-${props.slideId}`)
</script>

<template>
  <svg class="roadmap-line" viewBox="0 0 1920 1080" aria-hidden="true">
    <motion.path
      :key="animationKey"
      :d="path"
      fill="none"
      stroke="#050505"
      stroke-width="6"
      stroke-linecap="round"
      stroke-dasharray="28 22"
      :initial="{ pathLength: 0, opacity: 0.2 }"
      :animate="{ pathLength: 1, opacity: 1 }"
      :transition="{ duration: 1.35, ease: 'easeInOut' }"
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
  z-index: 1;
}
</style>
