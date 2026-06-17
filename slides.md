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
</section>

<style>
.title-slide {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
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
  position: relative;
  max-width: 900px;
  margin: 0;
  color: #f7f8fb;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 64px;
  font-weight: 800;
  line-height: 1.02;
  text-align: center;
  letter-spacing: 0;
}
</style>

---

<RoadmapSlide :id="1" />

---

<RoadmapSlide :id="2" />

---

<RoadmapSlide :id="3" />

---

<RoadmapSlide :id="4" />

---

<RoadmapSlide :id="5" />

---

<RoadmapSlide :id="6" />

---

<RoadmapSlide :id="7" />

---

<RoadmapSlide :id="8" />

---

<RoadmapSlide :id="9" />

---

<RoadmapSlide :id="10" />
