<script lang="ts">
const playedRoadmapSlides = new Set<number>()
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { onSlideEnter, useNav } from '@slidev/client'
import { motion } from 'motion-v'
import { roadmapSlides, type RoadmapIcon, type RoadmapTextBlock } from './roadmapSlides'

const groupSizesBySlide: Record<number, number[]> = {
  1: [4, 5],
  2: [4, 1, 1],
  3: [2, 1, 1, 1],
  4: [1, 1, 1, 1],
  5: [1, 1, 1, 1],
  6: [1, 1, 1, 1, 1],
  7: [1, 1, 1, 1, 1],
  8: [1, 1],
  9: [1, 1, 1],
  10: [1, 1, 0],
}

const defaultIcon = {
  x: 150,
  y: 405,
  w: 150,
  h: 150,
  kind: 'logo',
} satisfies Required<Pick<RoadmapIcon, 'x' | 'y' | 'w' | 'h' | 'kind'>>

const props = defineProps<{
  id: number
}>()

const nav = useNav()
const animationRun = ref(0)
const skipAnimation = ref(false)

const slide = computed(() => {
  const found = roadmapSlides.find(item => item.id === props.id)
  if (!found) throw new Error(`Roadmap slide ${props.id} not found`)
  return found
})

const groupSizes = computed(() => groupSizesBySlide[props.id] ?? slide.value.icons.map(() => 1))
const staticIcons = computed(() => props.id === 1 ? slide.value.icons.slice(0, 1) : [])
const groupIcons = computed(() => props.id === 1 ? slide.value.icons.slice(1) : slide.value.icons)

const groups = computed(() => {
  let blockIndex = 0

  return groupIcons.value.map((icon, index) => {
    const size = groupSizes.value[index] ?? 1
    const blocks = slide.value.blocks.slice(blockIndex, blockIndex + size)
    blockIndex += size

    return {
      icon,
      blocks,
      index,
    }
  })
})

const step = computed(() => nav.clicks.value)
const clipStart = computed(() => -100)
const visibleGroupIndex = computed(() => Math.min(step.value, groups.value.length - 1))
const roadmapPath = computed(() => {
  if (props.id !== 1) return slide.value.path

  return `M -100 520 C 20 485, 105 575, 250 515 ${slide.value.path.replace(/^M\s*250\s+515\s*/i, '')}`
})

const currentLineTarget = computed(() => {
  return lineTargetFor(visibleGroupIndex.value)
})

const previousLineTarget = computed(() => step.value <= 0 ? 0 : lineTargetFor(step.value - 1))

const currentFinalLineDelay = computed(() => {
  const group = groups.value[visibleGroupIndex.value]
  if (!group || !isLastVisibleGroup.value || group.blocks.length === 0) return 0

  return 1.95 + Math.max(0, group.blocks.length - 1) * 0.35 + 0.8
})

const animatedClipWidth = computed(() => {
  return currentLineTarget.value
})

const finalClipWidth = computed(() => {
  return isLastVisibleGroup.value && groups.value[visibleGroupIndex.value]?.blocks.length
    ? Math.max(0, 2020 - currentLineTarget.value)
    : 0
})

const finalClipStart = computed(() => clipStart.value + currentLineTarget.value)

const isLastVisibleGroup = computed(() => visibleGroupIndex.value === groups.value.length - 1)

onSlideEnter(() => {
  skipAnimation.value = playedRoadmapSlides.has(props.id)
  playedRoadmapSlides.add(props.id)
  animationRun.value += 1
})

const avatarIcons: Record<number, string> = {
  1: 'fluent:rocket-32-regular',
  2: 'ph:student',
  3: 'ph:routes',
  4: 'ph:database',
  5: 'ph:shield-check',
  6: 'ph:gauge',
  7: 'ph:git-branch',
  8: 'ph:tree-structure',
  9: 'ph:sparkle',
  10: 'ph:flag-checkered',
}

const roadmapIconNames: Record<string, string> = {
  Start: 'fluent:rocket-16-regular',
  HTML5: 'flowbite:html-solid',
  CSS: 'flowbite:css-solid',
  JavaScript: 'bi:javascript',
  Git: 'iconoir:git-solid',
  GitHub: 'mdi:github',
  React: 'logos:react',
  useState: 'catppuccin:folder-hooks-open',
  TS: 'bi:typescript',
  Data: 'carbon:ibm-data-product-exchange',
  'React Router': 'logos:react-router',
  MUI: 'simple-icons:mui',
  Flow: 'bxl:radix-ui',
  Storybook: 'file-icons:storybook',
  'Redux Toolkit': 'akar-icons:redux-fill',
  VITEST: 'devicon-plain:playwright',
  AJAX: 'logos:axios',
  WS: 'logos:websocket',
  Loaders: 'line-md:loading-twotone-loop',
  Errors: 'material-symbols:error-outline',
  ReactHookForm: 'simple-icons:reacthookform',
  Zod: 'simple-icons:zod',
  Login: 'hugeicons:authorized',
  RTKQuery: 'catppuccin:folder-redux-open',
  TanStack: 'simple-icons:tanstack',
  Zustand: 'devicon-plain:zustand',
  ESLint: 'mdi:eslint',
  Optimization: 'file-icons:config-react',
  Architecture: 'logos:create-react-app',
  'Next.js': 'ri:nextjs-fill',
  DEVOPS: 'clarity:ci-cd-line',
  Security: 'ph:shield-check',
  Backend: 'hugeicons:database-locked',
  Team: 'ph:users-three',
  AI: 'ph:sparkle',
  Finish: 'gis:flag-finish-b-o',
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

function isGroupVisible(index: number) {
  return index <= step.value
}

function lineTargetFor(index: number) {
  const group = groups.value[Math.min(index, groups.value.length - 1)]
  if (!group) return 0

  const iconX = group.icon.x ?? defaultIcon.x
  const iconW = group.icon.w ?? defaultIcon.w
  const target = group.index === groups.value.length - 1 && group.blocks.length === 0
    ? 2020
    : iconX + iconW * 0.5 + 50

  return Math.min(2020, Math.max(0, target - clipStart.value))
}

function revealAnimate(isVisible: boolean) {
  return isVisible
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 14, scale: 0.97 }
}

function revealInitial(isVisible: boolean) {
  return skipAnimation.value
    ? revealAnimate(isVisible)
    : { opacity: 0, y: 14, scale: 0.97 }
}

function revealTransition(delay: number) {
  return {
    duration: skipAnimation.value ? 0 : 0.4,
    delay: skipAnimation.value ? 0 : delay,
    ease: 'easeOut',
  }
}

function groupIconDelay(index: number) {
  return index === visibleGroupIndex.value ? 1.55 : 0
}

function blockDelay(groupIndex: number, blockIndex: number) {
  return groupIndex === visibleGroupIndex.value ? 1.95 + blockIndex * 0.35 : 0
}
</script>

<template>
  <section class="animated-roadmap-stage">
    <svg class="path-layer" viewBox="0 0 1920 1080" aria-hidden="true">
      <defs>
        <clipPath :id="`animated-roadmap-clip-${id}`">
          <motion.rect
            :key="`clip-${id}-${animationRun}-${step}`"
            :x="clipStart"
            y="0"
            height="1080"
            :initial="{ width: skipAnimation ? animatedClipWidth : previousLineTarget }"
            :animate="{ width: animatedClipWidth }"
            :transition="{
              duration: skipAnimation ? 0 : 1.5,
              delay: 0,
              ease: 'easeInOut',
            }"
          />
        </clipPath>
        <clipPath :id="`animated-roadmap-final-clip-${id}`">
          <motion.rect
            :key="`final-clip-${id}-${animationRun}-${step}`"
            :x="finalClipStart"
            y="0"
            height="1080"
            :initial="{ width: skipAnimation ? finalClipWidth : 0 }"
            :animate="{ width: finalClipWidth }"
            :transition="{
              duration: skipAnimation ? 0 : 1.5,
              delay: skipAnimation ? 0 : currentFinalLineDelay,
              ease: 'easeInOut',
            }"
          />
        </clipPath>
      </defs>

      <path
        class="path-segment"
        :d="roadmapPath"
        :clip-path="`url(#animated-roadmap-clip-${id})`"
      />
      <path
        v-if="isLastVisibleGroup"
        class="path-segment"
        :d="roadmapPath"
        :clip-path="`url(#animated-roadmap-final-clip-${id})`"
      />
    </svg>

    <div v-if="slide.avatar" class="avatar-panel" :style="{ backgroundColor: slide.avatarColor }">
      <Icon class="avatar-icon" :icon="avatarIcons[slide.id] ?? 'ph:rocket-launch'" />
    </div>

    <div v-if="slide.level" class="level-label">
      {{ slide.level }}
    </div>

    <div
      v-for="icon in staticIcons"
      :key="icon.label"
      class="roadmap-icon is-visible"
      :class="[`icon-${icon.kind ?? defaultIcon.kind}`]"
      :style="iconStyle(icon)"
    >
      <Icon class="roadmap-icon-symbol" :icon="iconName(icon)" />
    </div>

    <motion.div
      v-for="group in groups"
      :key="`icon-${animationRun}-${group.icon.label}`"
      class="roadmap-icon"
      :class="[`icon-${group.icon.kind ?? defaultIcon.kind}`]"
      :style="iconStyle(group.icon)"
      :initial="revealInitial(isGroupVisible(group.index))"
      :animate="revealAnimate(isGroupVisible(group.index))"
      :transition="revealTransition(groupIconDelay(group.index))"
    >
      <Icon class="roadmap-icon-symbol" :icon="iconName(group.icon)" />
    </motion.div>

    <template v-for="group in groups" :key="`blocks-${group.index}`">
      <motion.article
        v-for="(block, blockIndex) in group.blocks"
        :key="`block-${animationRun}-${group.index}-${block.title}`"
        class="topic-block"
        :class="[
          `topic-${block.size ?? 'md'}`,
          block.accent ? `accent-${block.side ?? 'left'}` : '',
          block.accent ? `accent-direction-${block.accentDirection ?? 'down'}` : '',
        ]"
        :style="blockStyle(block)"
        :initial="revealInitial(isGroupVisible(group.index))"
        :animate="revealAnimate(isGroupVisible(group.index))"
        :transition="revealTransition(blockDelay(group.index, blockIndex))"
      >
        <span v-if="block.accent" class="accent-line" :style="accentStyle(block)" />
        <h2>{{ block.title }}</h2>
        <ul v-if="block.items?.length">
          <li v-for="item in block.items" :key="item">{{ item }}</li>
        </ul>
      </motion.article>
    </template>
  </section>
</template>

<style scoped>
.animated-roadmap-stage {
  --roadmap-bg: #fff;
  --roadmap-text: #050505;
  --roadmap-muted: #858585;
  --roadmap-level: #808080;
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

.dark .animated-roadmap-stage,
.slidev-layout.dark .animated-roadmap-stage,
:global(.roadmap-dark .animated-roadmap-stage),
:global(.dark) .animated-roadmap-stage {
  --roadmap-bg: #0d1117;
  --roadmap-text: #f7f8fb;
  --roadmap-muted: #a8b0bd;
  --roadmap-level: #b5becd;
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
  animation: roadmap-line-pulse 2s ease-in-out infinite;
}

@keyframes roadmap-line-pulse {
  0%,
  100% {
    transform: translateY(0);
    stroke-width: 5;
    opacity: 1;
  }

  50% {
    transform: translateY(10px);
    stroke-width: 6.5;
    opacity: 0.82;
  }
}

.avatar-panel,
.level-label,
.roadmap-icon,
.topic-block {
  position: absolute;
  z-index: 4;
}

.avatar-panel {
  left: 5.2%;
  top: 32.6%;
  width: 15.6%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 10%;
  box-shadow: 0 16px 36px var(--roadmap-icon-shadow);
}

.avatar-icon {
  width: 54%;
  height: 54%;
  color: #050505;
}

.level-label {
  left: 5.5%;
  top: 64.5%;
  width: 22%;
  color: var(--roadmap-level);
  font-size: 17.4px;
  line-height: 1.16;
  font-weight: 600;
}

.roadmap-icon,
.topic-block {
  opacity: 0;
  transform: translateY(14px) scale(0.97);
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

.icon-emoji,
.icon-milestone {
  padding: 0;
  border: 0;
  border-radius: 10%;
  background: var(--icon-color);
  color: var(--icon-symbol-color);
  box-shadow: 0 16px 36px var(--roadmap-icon-shadow);
}

.icon-emoji .roadmap-icon-symbol,
.icon-milestone .roadmap-icon-symbol,
.icon-badge .roadmap-icon-symbol {
  width: 54%;
  height: 54%;
}

:global(.roadmap-dark .roadmap-icon:not(.icon-milestone):not(.icon-emoji)) {
  border-color: color-mix(in srgb, var(--icon-symbol-dark-color) 24%, transparent);
  background: var(--icon-bg-dark);
}

:global(.roadmap-dark .roadmap-icon:not(.icon-milestone):not(.icon-emoji) .roadmap-icon-symbol) {
  color: var(--icon-symbol-dark-color);
}

@media (prefers-reduced-motion: reduce) {
  .animated-roadmap-stage * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
