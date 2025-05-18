<template>
    <div class="min-h-screen flex items-center justify-center bg-[#1b1c1f]/90 flex-col text-white">
        <div class="text-3xl font-bold mb-4">Добро пожаловать 🎉</div>
        <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" class="w-72 h-auto rounded-xl shadow" />

        <a href="https://dobdev.vercel.app/" class="text-xl text-blue-400 mt-4">Можно посмотреть на мой сайт</a>
        <span class="mt-3">или</span>
        <button @click="logout"
            class="mt-6 px-6 py-2 bg-red-500 text-white rounded shadow-red-500/40 hover:shadow-red-500/80 focus:ring-2 focus:ring-red-400 ">Выйти
            отсель</button>
    </div>
</template>

<script setup>

import { useRouter } from "vue-router"
import { useAuthStore } from "../store/auth";

const router = useRouter()
const auth = useAuthStore()

function logout() {
    auth.logout()
    router.push('/')
}

</script>

<style scoped></style>