<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'

const props = defineProps<{
  path: string
  slideId: number
  color?: string
}>()

const animationKey = computed(() => `line-${props.slideId}`)
</script>

<template>
  <svg class="roadmap-line" viewBox="0 0 1920 1080" aria-hidden="true">
    <motion.path
      :key="animationKey"
      :d="path"
      fill="none"
      :stroke="color ?? '#08c7e8'"
      stroke-width="5"
      stroke-linecap="round"
      stroke-dasharray="24 18"
      :initial="{ strokeDashoffset: 42, opacity: 0.25 }"
      :animate="{ strokeDashoffset: 0, opacity: 1 }"
      :transition="{ duration: 1.2, ease: 'easeInOut' }"
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
