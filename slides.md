---
theme: seriph
title: Frontend Roadmap
info: |
  Editable frontend roadmap presentation.
drawings:
  persist: false
transition: fade
---

<section class="title-slide">
  <img
    class="title-slide-bg"
    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80"
    alt=""
  >
  <div class="title-slide-overlay"></div>
  <h1>Front-end roadmap 2026</h1>
  <svg class="title-roadmap-line" viewBox="0 0 1920 1080" aria-hidden="true">
    <defs>
      <clipPath id="title-roadmap-line-clip">
        <rect class="title-roadmap-line-reveal" x="40" y="240" width="0" height="430" />
      </clipPath>
    </defs>
    <path
      clip-path="url(#title-roadmap-line-clip)"
      d="M 55 570 C 120 625, 190 625, 255 570 C 320 515, 385 515, 450 570 C 515 625, 585 625, 650 570 C 715 515, 780 515, 845 570 C 910 625, 980 625, 1045 570 C 1110 515, 1175 515, 1240 570 C 1305 625, 1375 625, 1440 570 C 1505 515, 1570 515, 1635 570 C 1700 625, 1770 625, 1835 570 C 1900 515, 1960 515, 2020 570"
    />
  </svg>
</section>

<style>
.title-slide {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0d1117;
}

.title-slide-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.18;
  filter: saturate(0.75) contrast(1.05);
}

.title-slide-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 44%, rgb(255 255 255 / 0.12), transparent 34%),
    rgb(13 17 23 / 0.72);
}

.title-slide h1 {
  position: absolute;
  top: 28%;
  left: 50%;
  z-index: 2;
  width: min(900px, 92vw);
  margin: 0;
  color: #f7f8fb;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 64px;
  font-weight: 800;
  line-height: 1.02;
  text-align: center;
  letter-spacing: 0;
  transform: translateX(-50%);
}

.title-roadmap-line {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.title-roadmap-line path {
  fill: none;
  stroke: #7c3aed;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 24 18;
  animation: title-line-wiggle 2s 4.9s ease-in-out infinite;
}

.title-roadmap-line-reveal {
  animation: title-line-draw 4.4s 0.5s ease-in-out forwards;
}

@keyframes title-line-draw {
  to {
    width: 1980px;
  }
}

@keyframes title-line-wiggle {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(6px);
  }
}

html:not(.roadmap-dark) .title-slide {
  background: #fff;
}

html:not(.roadmap-dark) .title-slide-bg {
  opacity: 0.2;
  filter: saturate(0.82) contrast(1.02);
}

html:not(.roadmap-dark) .title-slide-overlay {
  background:
    radial-gradient(circle at 50% 44%, rgb(255 255 255 / 0.46), transparent 36%),
    rgb(255 255 255 / 0.76);
}

html:not(.roadmap-dark) .title-slide h1 {
  color: #111827;
}
</style>

---
clicks: 1
---

<AnimatedRoadmapSlide :id="1" />

---
clicks: 2
---

<AnimatedRoadmapSlide :id="2" />

---
clicks: 3
---

<AnimatedRoadmapSlide :id="3" />

---
clicks: 3
---

<AnimatedRoadmapSlide :id="4" />

---
clicks: 3
---

<AnimatedRoadmapSlide :id="5" />

---
clicks: 4
---

<AnimatedRoadmapSlide :id="6" />

---
clicks: 4
---

<AnimatedRoadmapSlide :id="7" />

---
clicks: 1
---

<AnimatedRoadmapSlide :id="8" />

---
clicks: 2
---

<AnimatedRoadmapSlide :id="9" />

---
clicks: 2
---

<AnimatedRoadmapSlide :id="10" />
