<script setup lang="ts">
import { computed } from 'vue'
import RoadmapLine from './RoadmapLine.vue'
import { roadmapSlides, type RoadmapIcon, type RoadmapTextBlock } from './roadmapSlides'

const props = defineProps<{
  id: number
}>()

const slide = computed(() => {
  const found = roadmapSlides.find(item => item.id === props.id)
  if (!found) throw new Error(`Roadmap slide ${props.id} not found`)
  return found
})

function px(value: number) {
  return `${value / 19.2}%`
}

function blockStyle(block: RoadmapTextBlock) {
  return {
    left: px(block.x),
    top: px(block.y),
    width: px(block.w),
    textAlign: block.align ?? 'left',
  }
}

function iconStyle(icon: RoadmapIcon) {
  return {
    left: px(icon.x),
    top: px(icon.y),
    width: px(icon.w),
    height: `${icon.h / 10.8}%`,
    '--icon-color': icon.color ?? '#111',
  }
}

function accentStyle(block: RoadmapTextBlock) {
  return {
    backgroundColor: block.accent ?? '#555',
  }
}
</script>

<template>
  <section class="roadmap-stage">
    <RoadmapLine :path="slide.path" :slide-id="slide.id" />

    <div v-if="slide.avatar" class="avatar-panel" :style="{ backgroundColor: slide.avatarColor }">
      <span>{{ slide.avatar }}</span>
    </div>

    <div v-if="slide.level" class="level-label">
      {{ slide.level }}
    </div>

    <div
      v-for="icon in slide.icons"
      :key="icon.label"
      class="roadmap-icon"
      :class="[`icon-${icon.kind ?? 'badge'}`]"
      :style="iconStyle(icon)"
    >
      <span>{{ icon.label }}</span>
    </div>

    <article
      v-for="block in slide.blocks"
      :key="block.title"
      class="topic-block"
      :class="[
        `topic-${block.size ?? 'md'}`,
        block.accent ? `accent-${block.side ?? 'left'}` : '',
      ]"
      :style="blockStyle(block)"
    >
      <span v-if="block.accent" class="accent-line" :style="accentStyle(block)" />
      <h2>{{ block.title }}</h2>
      <ul v-if="block.items?.length">
        <li v-for="item in block.items" :key="item">{{ item }}</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.roadmap-stage {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #fff;
  color: #050505;
  font-family: Arial, Helvetica, sans-serif;
}

.avatar-panel,
.level-label,
.roadmap-icon,
.topic-block {
  position: absolute;
  z-index: 2;
}

.avatar-panel {
  left: 5.2%;
  top: 32.6%;
  width: 15.6%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 10%;
}

.avatar-panel span {
  font-size: 72px;
  line-height: 1;
}

.level-label {
  left: 5.5%;
  top: 64.5%;
  width: 22%;
  color: #808080;
  font-size: 34px;
  line-height: 1.28;
  font-weight: 600;
}

.topic-block {
  font-size: 20px;
  line-height: 1.18;
}

.topic-block h2 {
  margin: 0 0 12px;
  color: #050505;
  font-size: 30px;
  line-height: 1.12;
  font-weight: 700;
  letter-spacing: 0;
}

.topic-lg h2 {
  font-size: 48px;
}

.topic-sm h2 {
  font-size: 24px;
}

.topic-block ul {
  margin: 0;
  padding-left: 24px;
  color: #858585;
  font-size: 20px;
  line-height: 1.18;
}

.topic-block[style*='right'] ul {
  list-style-position: inside;
}

.accent-line {
  position: absolute;
  top: 0;
  bottom: -16px;
  width: 2px;
}

.accent-left {
  padding-left: 44px;
}

.accent-left .accent-line {
  left: 0;
}

.accent-left .accent-line::before,
.accent-left .accent-line::after,
.accent-right .accent-line::before,
.accent-right .accent-line::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: inherit;
}

.accent-left .accent-line::before,
.accent-right .accent-line::before {
  top: 0;
}

.accent-left .accent-line::after,
.accent-right .accent-line::after {
  top: 50%;
}

.accent-left .accent-line::before,
.accent-left .accent-line::after {
  left: 0;
}

.accent-right {
  padding-right: 44px;
}

.accent-right .accent-line {
  right: 0;
}

.accent-right .accent-line::before,
.accent-right .accent-line::after {
  right: 0;
}

.roadmap-icon {
  display: grid;
  place-items: center;
  color: #050505;
  font-weight: 800;
  text-align: center;
  line-height: 1;
}

.roadmap-icon span {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}

.icon-badge span {
  border-radius: 12px;
  background: var(--icon-color);
  color: #fff;
  box-shadow: 0 8px 18px rgb(0 0 0 / 0.08);
  font-size: 34px;
}

.icon-logo span {
  color: var(--icon-color);
  font-size: 30px;
  font-weight: 900;
}

.icon-emoji span {
  color: var(--icon-color);
  font-size: 76px;
}

@media (prefers-reduced-motion: reduce) {
  .roadmap-stage * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
