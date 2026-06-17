<script setup lang="ts">
import {computed} from 'vue'
import {Icon} from '@iconify/vue'
import RoadmapLine from './RoadmapLine.vue'
import {roadmapSlides, type RoadmapIcon, type RoadmapTextBlock} from './roadmapSlides'

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
    textAlign: 'left',
  }
}

function iconStyle(icon: RoadmapIcon) {
  const color = icon.color ?? '#111'

  return {
    left: xPct(icon.x ?? defaultIcon.x),
    top: yPct(icon.y ?? defaultIcon.y),
    width: xPct(icon.w ?? defaultIcon.w),
    height: `${(icon.h ?? defaultIcon.h) / 10.8}%`,
    '--icon-color': color,
    '--icon-symbol-color': icon.iconColor ?? color,
  }
}

function accentStyle(block: RoadmapTextBlock) {
  return {
    backgroundColor: block.accent ?? '#555',
    '--accent-line-length': `${block.accentLength ?? 120}px`,
  }
}

const avatarIcons: Record<number, string> = {
  1: 'ph:rocket-launch',
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
  HTML5: 'ph:file-html',
  CSS: 'ph:file-css',
  React: 'logos:react',
  useState: 'catppuccin:folder-hooks-open',
  TS: 'ph:file-ts',
  Data: 'carbon:ibm-data-product-exchange',
  'React Router': 'logos:react-router',
  MUI: 'simple-icons:mui',
  Flow: 'bxl:radix-ui',
  Storybook: 'file-icons:storybook',
  'Redux Toolkit': 'akar-icons:redux-fill',
  VITEST: 'devicon-plain:playwright',
  AJAX: 'ph:cloud-arrow-down',
  WS: 'logos:websocket',
  Loaders: 'line-md:loading-twotone-loop',
  Errors: 'material-symbols:error-outline',
  ReactHookForm: 'simple-icons:reacthookform',
  Zod: 'simple-icons:zod',
  Login: 'hugeicons:authorized',
  'RTK Query': 'catppuccin:folder-redux-open',
  'TanStack + Zustand': 'simple-icons:tanstack',
  '+ ESLint': 'ph:code-block',
  JavaScript: 'ph:file-js',
  Git: 'ph:git-branch',
  GitHub: 'ph:github-logo',
  Architecture: 'game-icons:metal-scales',
  'Next.js': 'ri:nextjs-fill',
  AI: 'ph:sparkle',
  DEVOPS: 'clarity:ci-cd-line',
  Security: 'ph:shield-check',
  Team: 'ph:users-three',
  Backend: 'hugeicons:database-locked',
  Finish: 'gis:flag-finish-b-o',
}

function iconName(icon: RoadmapIcon) {
  return icon.icon ?? roadmapIconNames[icon.label] ?? 'ph:code'
}
</script>

<template>
  <section class="roadmap-stage">
    <RoadmapLine :path="slide.path" :slide-id="slide.id" color="#7c3aed"/>

    <div v-if="slide.avatar" class="avatar-panel" :style="{ backgroundColor: slide.avatarColor }">
      <Icon class="avatar-icon" :icon="avatarIcons[slide.id] ?? 'ph:rocket-launch'"/>
    </div>

    <div v-if="slide.level" class="level-label">
      {{ slide.level }}
    </div>

    <div
        v-for="icon in slide.icons"
        :key="icon.label"
        class="roadmap-icon"
        :class="[`icon-${icon.kind ?? defaultIcon.kind}`]"
        :style="iconStyle(icon)"
    >
      <Icon class="roadmap-icon-symbol" :icon="iconName(icon)"/>
    </div>

    <article
        v-for="block in slide.blocks"
        :key="block.title"
        class="topic-block"
        :class="[
        `topic-${block.size ?? 'md'}`,
        block.accent ? `accent-${block.side ?? 'left'}` : '',
        block.accent ? `accent-direction-${block.accentDirection ?? 'down'}` : '',
      ]"
        :style="blockStyle(block)"
    >
      <span v-if="block.accent" class="accent-line" :style="accentStyle(block)"/>
      <h2>{{ block.title }}</h2>
      <ul v-if="block.items?.length">
        <li v-for="item in block.items" :key="item">{{ item }}</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.roadmap-stage {
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

.dark .roadmap-stage,
.slidev-layout.dark .roadmap-stage,
:global(.dark) .roadmap-stage {
  --roadmap-bg: #0d1117;
  --roadmap-text: #f7f8fb;
  --roadmap-muted: #a8b0bd;
  --roadmap-level: #b5becd;
  --roadmap-icon-shadow: rgb(0 0 0 / 0.32);
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
  color: var(--roadmap-text);
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

.topic-block[style*='right'] ul {
  padding-right: 0;
  padding-left: 0;
  list-style-position: inside;
}

.accent-line {
  position: absolute;
  width: 2px;
  height: var(--accent-line-length);
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
  content: '';
  position: absolute;
  width: 15px;
  height: 2px;
  background: inherit;
}

.accent-left .accent-line::before,
.accent-right .accent-line::before {
  top: 0;
}

.accent-left .accent-line::after,
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
  text-align: center;
  line-height: 1;
  box-shadow: 0 12px 28px var(--roadmap-icon-shadow);
  backdrop-filter: blur(2px);
}

.roadmap-icon-symbol {
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  color: var(--icon-symbol-color);
}

.roadmap-icon-symbol :deep([fill]:not([fill='none'])) {
  fill: currentColor !important;
}

.roadmap-icon-symbol :deep([stroke]:not([stroke='none'])) {
  stroke: currentColor !important;
}

.roadmap-icon span {
  color: var(--roadmap-text);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.05;
}

.icon-badge {
  border-radius: 20px;
}

.icon-logo,
.icon-emoji {
  background: color-mix(in srgb, var(--icon-color) 9%, var(--roadmap-bg));
}

@media (prefers-reduced-motion: reduce) {
  .roadmap-stage * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
