<template>
    <div class="min-h-screen flex items-center justify-center bg-green-50 flex-col">
        <div class="text-3xl font-bold mb-4">Добро пожаловать 🎉</div>
        <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" class="w-72 h-auto rounded-xl shadow" />
        <button @click="logout" class="mt-6 px-6 py-2 bg-red-500 text-white rounded">Logout</button>
    </div>
</template>

<script setup lang="ts">

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