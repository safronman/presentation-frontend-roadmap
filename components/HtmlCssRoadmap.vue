<script lang="ts">
const playedRoadmapSlides = new Set<string>()
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { onSlideEnter, useNav } from '@slidev/client'
import { motion } from 'motion-v'
import { roadmapSlides, type RoadmapIcon, type RoadmapTextBlock } from './roadmapSlides'

const nav = useNav()
const animationRun = ref(0)
const skipAnimation = ref(false)
const slide = roadmapSlides.find(item => item.id === 1)

if (!slide) throw new Error('Roadmap slide 1 not found')

const htmlBlocks = slide.blocks.slice(0, 4)
const cssBlocks = slide.blocks.slice(4)
const startIcon = slide.icons.find(icon => icon.label === 'Start')
const htmlIcon = slide.icons.find(icon => icon.label === 'HTML5')
const cssIcon = slide.icons.find(icon => icon.label === 'CSS')

const step = computed(() => nav.clicks.value)

onSlideEnter(() => {
  skipAnimation.value = playedRoadmapSlides.has('html-css')
  playedRoadmapSlides.add('html-css')
  animationRun.value += 1
})

const defaultIcon = {
  x: 150,
  y: 405,
  w: 150,
  h: 150,
  kind: 'logo',
} satisfies Required<Pick<RoadmapIcon, 'x' | 'y' | 'w' | 'h' | 'kind'>>

const lineSegments = [
  {
    id: 'rocket-html',
    path: 'M 250 515 C 370 455, 445 500, 520 615 C 575 700, 620 765, 660 795',
    clipX: 240,
    clipY: 420,
    clipWidth: 440,
    clipHeight: 500,
    visibleAt: 0,
    delay: 0,
  },
  {
    id: 'html-css',
    path: 'M 660 795 C 780 890, 980 690, 1120 535 C 1235 410, 1290 255, 1370 150',
    clipX: 640,
    clipY: 120,
    clipWidth: 760,
    clipHeight: 790,
    visibleAt: 1,
    delay: 0,
  },
  {
    id: 'css-next',
    path: 'M 1370 150 C 1460 265, 1615 315, 1745 360 C 1845 395, 1915 405, 1980 420',
    clipX: 1360,
    clipY: 120,
    clipWidth: 650,
    clipHeight: 340,
    visibleAt: 1,
    delay: 3.9,
  },
]

const roadmapIconNames: Record<string, string> = {
  Start: 'fluent:rocket-16-regular',
  HTML5: 'flowbite:html-solid',
  CSS: 'flowbite:css-solid',
}

function hexToRgb(color: string) {
  const match = color.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i)
  if (!match) return null

  const normalized = match[1].length === 3
    ? match[1].split('').map(value => value + value).join('')
    : match[1]

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  }
}

function isDarkColor(color?: string) {
  if (!color) return false

  const rgb = hexToRgb(color)
  if (!rgb) return false

  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 < 72
}

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
    textAlign: 'left',
  }
}

function iconStyle(icon: RoadmapIcon) {
  const color = icon.color ?? '#111'
  const symbolColor = icon.iconColor ?? color
  const darkSymbolColor = isDarkColor(symbolColor) ? '#f7f8fb' : symbolColor

  return {
    left: xPct(icon.x ?? defaultIcon.x),
    top: yPct(icon.y ?? defaultIcon.y),
    width: xPct(icon.w ?? defaultIcon.w),
    height: `${(icon.h ?? defaultIcon.h) / 10.8}%`,
    '--icon-color': color,
    '--icon-symbol-color': symbolColor,
    '--icon-symbol-dark-color': darkSymbolColor,
    '--icon-bg-dark': isDarkColor(symbolColor)
      ? 'rgb(247 248 251 / 0.12)'
      : `color-mix(in srgb, ${color} 22%, var(--roadmap-bg))`,
  }
}

function accentStyle(block: RoadmapTextBlock) {
  const accentColor = block.accent ?? '#555'

  return {
    '--accent-color': accentColor,
    '--accent-dark-color': isDarkColor(accentColor) ? '#f7f8fb' : accentColor,
    '--accent-line-length': `${block.accentLength ?? 120}px`,
  }
}

function iconName(icon: RoadmapIcon) {
  return icon.icon ?? roadmapIconNames[icon.label] ?? 'ph:code'
}

function revealAnimate(isVisible: boolean) {
  return isVisible
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 14, scale: 0.97 }
}

function revealTransition(delay: number) {
  return {
    duration: skipAnimation.value ? 0 : 0.4,
    delay: skipAnimation.value ? 0 : delay,
    ease: 'easeOut',
  }
}

function revealInitial(isVisible: boolean) {
  return skipAnimation.value
    ? revealAnimate(isVisible)
    : { opacity: 0, y: 14, scale: 0.97 }
}
</script>

<template>
  <section class="html-css-roadmap">
    <svg class="path-layer" viewBox="0 0 1920 1080" aria-hidden="true">
      <defs>
        <clipPath
          v-for="segment in lineSegments"
          :id="`html-css-clip-${segment.id}`"
          :key="`clip-${segment.id}`"
        >
          <motion.rect
            :key="`html-css-clip-${segment.id}-${animationRun}`"
            :x="segment.clipX"
            :y="segment.clipY"
            :height="segment.clipHeight"
            :initial="{ width: skipAnimation && step >= segment.visibleAt ? segment.clipWidth : 0 }"
            :animate="{ width: step >= segment.visibleAt ? segment.clipWidth : 0 }"
            :transition="{
              duration: skipAnimation ? 0 : 1.5,
              delay: !skipAnimation && step >= segment.visibleAt ? segment.delay : 0,
              ease: 'easeInOut',
            }"
          />
        </clipPath>
      </defs>

      <path
        v-for="segment in lineSegments"
        :key="segment.id"
        class="path-segment"
        :class="{ 'is-visible': step >= segment.visibleAt }"
        :d="segment.path"
        :clip-path="`url(#html-css-clip-${segment.id})`"
      />
    </svg>

    <div
      v-if="startIcon"
      class="roadmap-icon icon-badge is-visible"
      :style="iconStyle(startIcon)"
    >
      <Icon class="roadmap-icon-symbol" :icon="iconName(startIcon)" />
    </div>

    <motion.div
      v-if="htmlIcon"
      :key="`html-icon-${animationRun}`"
      class="roadmap-icon icon-logo"
      :style="iconStyle(htmlIcon)"
      :initial="revealInitial(true)"
      :animate="revealAnimate(true)"
      :transition="revealTransition(1.55)"
    >
      <Icon class="roadmap-icon-symbol" :icon="iconName(htmlIcon)" />
    </motion.div>

    <motion.div
      v-if="cssIcon"
      :key="`css-icon-${animationRun}`"
      class="roadmap-icon icon-logo"
      :style="iconStyle(cssIcon)"
      :initial="revealInitial(step >= 1)"
      :animate="revealAnimate(step >= 1)"
      :transition="revealTransition(step >= 1 ? 1.55 : 0)"
    >
      <Icon class="roadmap-icon-symbol" :icon="iconName(cssIcon)" />
    </motion.div>

    <motion.article
      v-for="(block, index) in htmlBlocks"
      :key="`html-${animationRun}-${block.title}`"
      class="topic-block"
      :class="[
        `topic-${block.size ?? 'md'}`,
        block.accent ? `accent-${block.side ?? 'left'}` : '',
        block.accent ? `accent-direction-${block.accentDirection ?? 'down'}` : '',
      ]"
      :style="blockStyle(block)"
      :initial="revealInitial(true)"
      :animate="revealAnimate(true)"
      :transition="revealTransition(1.95 + index * 0.35)"
    >
      <span v-if="block.accent" class="accent-line" :style="accentStyle(block)" />
      <h2>{{ block.title }}</h2>
      <ul v-if="block.items?.length">
        <li v-for="item in block.items" :key="item">{{ item }}</li>
      </ul>
    </motion.article>

    <motion.article
      v-for="(block, index) in cssBlocks"
      :key="`css-${animationRun}-${block.title}`"
      class="topic-block"
      :class="[
        `topic-${block.size ?? 'md'}`,
        block.accent ? `accent-${block.side ?? 'left'}` : '',
        block.accent ? `accent-direction-${block.accentDirection ?? 'down'}` : '',
      ]"
      :style="blockStyle(block)"
      :initial="revealInitial(step >= 1)"
      :animate="revealAnimate(step >= 1)"
      :transition="revealTransition(step >= 1 ? 1.95 + index * 0.35 : 0)"
    >
      <span v-if="block.accent" class="accent-line" :style="accentStyle(block)" />
      <h2>{{ block.title }}</h2>
      <ul v-if="block.items?.length">
        <li v-for="item in block.items" :key="item">{{ item }}</li>
      </ul>
    </motion.article>
  </section>
</template>

<style scoped>
.html-css-roadmap {
  --roadmap-bg: #fff;
  --roadmap-text: #050505;
  --roadmap-muted: #858585;
  --roadmap-icon-bg: color-mix(in srgb, var(--icon-color) 12%, var(--roadmap-bg));
  --roadmap-icon-border: color-mix(in srgb, var(--icon-color) 34%, transparent);
  --roadmap-icon-shadow: rgb(0 0 0 / 0.08);

  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--roadmap-bg);
  color: var(--roadmap-text);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8.2px;
  line-height: 1.15;
}

.dark .html-css-roadmap,
.slidev-layout.dark .html-css-roadmap,
:global(.roadmap-dark .html-css-roadmap),
:global(.dark) .html-css-roadmap {
  --roadmap-bg: #0d1117;
  --roadmap-text: #f7f8fb;
  --roadmap-muted: #a8b0bd;
  --roadmap-icon-shadow: rgb(0 0 0 / 0.32);
}

.path-layer {
  position: absolute;
  inset: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.path-segment {
  fill: none;
  stroke: #7c3aed;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 24 18;
  opacity: 0;
  transition: opacity 180ms ease;
}

.path-segment.is-visible {
  opacity: 1;
}

.roadmap-icon,
.topic-block {
  position: absolute;
  z-index: 4;
}

.roadmap-icon,
.topic-block {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.roadmap-icon.is-visible,
.topic-block.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
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
  color: var(--roadmap-text);
  font-size: 14.8px;
  font-weight: 600;
  line-height: 1.08;
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
  color: var(--roadmap-muted);
  font-size: 10.2px;
  line-height: 1.16;
  list-style-position: outside;
}

.topic-block li {
  margin: 0;
  padding: 0;
  color: var(--roadmap-muted);
  font-size: 10.2px;
  line-height: 1.16;
}

.accent-line {
  position: absolute;
  width: 2px;
  height: var(--accent-line-length);
  background: var(--accent-color, #555);
}

:global(.roadmap-dark .accent-line) {
  background: var(--accent-dark-color, var(--accent-color, #555));
}

.accent-direction-down .accent-line {
  top: 5px;
}

.accent-direction-up .accent-line {
  bottom: calc(100% - 5px);
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
  position: absolute;
  width: 15px;
  height: 2px;
  background: inherit;
  content: '';
}

.accent-left .accent-line::before,
.accent-left .accent-line::after,
.accent-right .accent-line::before,
.accent-right .accent-line::after {
  top: 0;
}

.accent-direction-up .accent-line::before,
.accent-direction-up .accent-line::after {
  top: auto;
  bottom: 0;
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
  box-sizing: border-box;
  display: grid;
  place-items: center;
  gap: 6px;
  padding: 8px;
  border: 1px solid var(--roadmap-icon-border);
  border-radius: 18px;
  background: var(--roadmap-icon-bg);
  color: var(--icon-color);
  font-weight: 800;
  line-height: 1;
  text-align: center;
  box-shadow: 0 12px 28px var(--roadmap-icon-shadow);
  backdrop-filter: blur(2px);
}

.roadmap-icon-symbol {
  flex: 0 0 auto;
  width: 46px;
  height: 46px;
  color: var(--icon-symbol-color);
}

.roadmap-icon-symbol :deep([fill]:not([fill='none'])) {
  fill: currentColor !important;
}

.roadmap-icon-symbol :deep([stroke]:not([stroke='none'])) {
  stroke: currentColor !important;
}

.icon-badge,
.icon-logo {
  border-radius: 20px;
}

.icon-logo {
  background: color-mix(in srgb, var(--icon-color) 9%, var(--roadmap-bg));
}

.icon-badge .roadmap-icon-symbol {
  width: 54%;
  height: 54%;
}

:global(.roadmap-dark .roadmap-icon:not(.icon-badge)) {
  border-color: color-mix(in srgb, var(--icon-symbol-dark-color) 24%, transparent);
  background: var(--icon-bg-dark);
}

:global(.roadmap-dark .roadmap-icon:not(.icon-badge) .roadmap-icon-symbol) {
  color: var(--icon-symbol-dark-color);
}

@media (prefers-reduced-motion: reduce) {
  .html-css-roadmap * {
    transition: none !important;
    animation: none !important;
  }

}
</style>
