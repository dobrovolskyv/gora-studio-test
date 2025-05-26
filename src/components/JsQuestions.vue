<template>
    <div>
        <h2 class="text-2xl font-semibold mb-2 text-blue-300 text-center">JavaScript</h2>
        <div v-for="(item, index) in js" :key="index"
            :class="['text-white py-2 border ', { active: activeIndexJs === index }]">
            <p class="font-bold cursor-pointer" @click="toggle(index)">
                {{ item.title }}
            </p>
            <p class="text-sm mt-2" v-if="activeIndexJs === index">
                {{ item.content }}
            </p>
        </div>
        <h2 class="text-2xl font-semibold mb-2 text-blue-300 text-center mt-6">React</h2>
        <div v-for="(item, index) in react" :key="index"
            :class="['text-white py-2 border', { active: activeIndexReact === index }]">

            <p class="font-bold cursor-pointer" @click="toggleReact(index)">
                {{ item.title }}
            </p>
            <p class="text-sm mt-2" v-if="activeIndexReact === index">
                {{ item.content }}
            </p>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { js, react } from '../data'

const activeIndexJs = ref(null)
const activeIndexReact = ref(null)

function toggle(index) {
    activeIndexJs.value = activeIndexJs.value === index ? null : index
}
function toggleReact(index) {
    activeIndexReact.value = activeIndexReact.value === index ? null : index
}

</script>

<style scoped></style>