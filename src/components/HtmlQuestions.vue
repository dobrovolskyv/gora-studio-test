<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['accordion-item', { active: activeIndex === index }]"
    >
      <div class="accordion-header" @click="toggle(index)">
        {{ item.title }}
      </div>
      <div class="accordion-body" v-if="activeIndex === index">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = [
  { title: 'Что такое Flowbite?', content: 'Flowbite — это библиотека компонентов на основе Tailwind CSS.' },
  { title: 'Есть ли Figma-файл?', content: 'Да, макеты доступны в Figma.' },
  { title: 'Чем отличается от Tailwind UI?', content: 'Flowbite — бесплатный, Tailwind UI — платный.' },
]

const activeIndex = ref(null)

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.accordion-item {
  border: 1px solid #ccc;
  margin-bottom: 8px;
}
.accordion-header {
  padding: 12px;
  background-color: #f0f0f0;
  cursor: pointer;
}
.accordion-body {
  padding: 12px;
  background-color: #fff;
}
.active .accordion-header {
  background-color: #e0e0e0;
}
</style>
