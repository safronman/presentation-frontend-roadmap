<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useNav } from '@slidev/client'

const themeStorageKey = 'frontend-roadmap-theme'
const nav = useNav()
const isDarkTheme = ref(false)

const isTitleSlide = computed(() => nav.currentPage.value === 1)

function setRoadmapTheme(theme: 'light' | 'dark') {
  isDarkTheme.value = theme === 'dark'
  document.documentElement.classList.toggle('roadmap-dark', isDarkTheme.value)
  localStorage.setItem(themeStorageKey, theme)
}

function toggleRoadmapTheme() {
  setRoadmapTheme(isDarkTheme.value ? 'light' : 'dark')
}

onMounted(() => {
  setRoadmapTheme(localStorage.getItem(themeStorageKey) === 'dark' ? 'dark' : 'light')
})
</script>

<template>
  <button
      class="deck-theme-toggle"
      type="button"
      :aria-label="isDarkTheme ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
      :title="isDarkTheme ? 'Светлая тема' : 'Темная тема'"
      @click="toggleRoadmapTheme"
  >
    <Icon :icon="isDarkTheme ? 'ph:sun' : 'ph:moon-stars'"/>
  </button>

  <div v-if="!isTitleSlide" class="deck-page-counter">
    {{ nav.currentPage.value }} / {{ nav.total.value }}
  </div>
</template>

<style scoped>
.deck-theme-toggle {
  position: fixed;
  top: 18px;
  right: 22px;
  z-index: 100;
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  padding: 0;
  border: 1px solid rgb(130 140 150 / 0.32);
  border-radius: 8px;
  background: rgb(245 247 250 / 0.78);
  color: #111827;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.12);
  cursor: pointer;
  backdrop-filter: blur(8px);
}

:global(.roadmap-dark) .deck-theme-toggle {
  border-color: rgb(255 255 255 / 0.18);
  background: rgb(31 41 55 / 0.82);
  color: #f7f8fb;
}

.deck-theme-toggle:hover {
  background: rgb(229 233 240 / 0.9);
}

:global(.roadmap-dark) .deck-theme-toggle:hover {
  background: rgb(55 65 81 / 0.9);
}

.deck-theme-toggle svg {
  width: 17px;
  height: 17px;
}

.deck-page-counter {
  position: fixed;
  right: 22px;
  bottom: 16px;
  z-index: 100;
  min-width: 48px;
  padding: 5px 10px;
  border: 1px solid rgb(130 140 150 / 0.28);
  border-radius: 8px;
  background: rgb(245 247 250 / 0.76);
  color: #111827;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.1);
  backdrop-filter: blur(8px);
}

:global(.roadmap-dark) .deck-page-counter {
  border-color: rgb(255 255 255 / 0.16);
  background: rgb(31 41 55 / 0.78);
  color: #f7f8fb;
}
</style>
