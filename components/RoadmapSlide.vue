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

function xPct(value: number) {
  return `${value / 19.2}%`
}

function yPct(value: number) {
  return `${value / 10.8}%`
}

function blockStyle(block: RoadmapTextBlock) {
  return {
    left: xPct(block.x),
    top: yPct(block.y),
    width: xPct(block.w),
    textAlign: block.align ?? 'left',
  }
}

function maskStyle(block: RoadmapTextBlock) {
  const height = block.items?.length
    ? 90 + block.items.length * (block.size === 'sm' ? 38 : 46)
    : block.size === 'lg'
      ? 88
      : 70

  return {
    left: xPct(Math.max(0, block.x - 36)),
    top: yPct(Math.max(0, block.y - 22)),
    width: xPct(block.w + 92),
    height: `${height / 10.8}%`,
  }
}

function iconStyle(icon: RoadmapIcon) {
  return {
    left: xPct(icon.x),
    top: yPct(icon.y),
    width: xPct(icon.w),
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
    <img class="reference-image" :src="`./img/${slide.id}.png`" :alt="`Roadmap reference ${slide.id}`" />
    <RoadmapLine :path="slide.path" :slide-id="slide.id" color="#08c7e8" />

    <div class="chrome-mask roadmap-title-mask" />
    <div class="chrome-mask incubator-logo-mask" />
    <div v-if="slide.level" class="chrome-mask level-mask" />

    <div
      v-for="block in slide.blocks"
      :key="`${block.title}-mask`"
      class="text-mask"
      :style="maskStyle(block)"
    />

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
  font-size: 8.2px;
  line-height: 1.15;
}

.reference-image,
.chrome-mask,
.text-mask {
  position: absolute;
}

.reference-image {
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.chrome-mask,
.text-mask {
  z-index: 1;
  background: #fff;
}

.roadmap-title-mask {
  left: 4.6%;
  top: 4%;
  width: 17%;
  height: 7.2%;
}

.incubator-logo-mask {
  left: 4.6%;
  bottom: 2.8%;
  width: 19%;
  height: 9.8%;
}

.level-mask {
  left: 5%;
  top: 63%;
  width: 27%;
  height: 15%;
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
  display: none;
  place-items: center;
  border-radius: 10%;
}

.avatar-panel span {
  font-size: 36.8px;
  line-height: 1;
}

.level-label {
  left: 5.5%;
  top: 64.5%;
  width: 22%;
  color: #808080;
  font-size: 17.4px;
  line-height: 1.16;
  font-weight: 600;
}

.topic-block {
  box-sizing: border-box;
  font-size: 10.2px;
  line-height: 1.14;
  white-space: normal;
}

.topic-block h2 {
  display: block;
  box-sizing: border-box;
  margin: 0 0 6px;
  padding: 0;
  border: 0;
  color: #050505;
  font-size: 14.8px;
  line-height: 1.08;
  font-weight: 600;
  letter-spacing: 0;
  white-space: normal;
}

.topic-lg h2 {
  font-size: 23.5px;
}

.topic-sm h2 {
  font-size: 12.3px;
}

.topic-block ul {
  margin: 0;
  padding: 0 0 0 12px;
  color: #858585;
  font-size: 10.2px;
  line-height: 1.16;
  list-style-position: outside;
}

.topic-block li {
  margin: 0;
  padding: 0;
  color: #858585;
  font-size: 10.2px;
  line-height: 1.16;
}

.topic-block[style*='right'] ul {
  padding-right: 0;
  padding-left: 0;
  list-style-position: inside;
}

.accent-line {
  position: absolute;
  top: 0;
  bottom: -8px;
  width: 1px;
}

.accent-left {
  padding-left: 22px;
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
  width: 15px;
  height: 1px;
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
  padding-right: 22px;
}

.accent-right .accent-line {
  right: 0;
}

.accent-right .accent-line::before,
.accent-right .accent-line::after {
  right: 0;
}

.roadmap-icon {
  display: none;
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
