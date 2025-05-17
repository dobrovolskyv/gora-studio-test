<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
            <h2 class="text-2xl font-semibold mb-4">Login</h2>
            <div class="flex gap-4 mb-4">
                <label><input type="radio" value="email" v-model="loginType" /> Email</label>
                <label><input type="radio" value="phone" v-model="loginType" /> Phone</label>
            </div>
            <form @submit.prevent="onSubmit" autocomplete="on">
                <div v-if="loginType === 'email'" class="mb-4">
                    <input type="email" v-model="email" required placeholder="Email"
                        class="w-full border p-2 rounded" />
                    <input type="password" v-model="password" required placeholder="Password"
                        class="w-full mt-2 border p-2 rounded" />
                </div>
                <div v-if="loginType === 'phone'" class="mb-4">
                    <input type="tel" v-model="phone" required placeholder="+7 (___) ___-__-__"
                        class="w-full border p-2 rounded" />
                </div>
                <label class="block mb-2"><input type="checkbox" v-model="rememberMe" /> Remember me</label>
                <button class="bg-blue-500 text-white w-full py-2 rounded">Log in</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router"
import {useAuthStore} from "../store/auth";

const router = useRouter()
const auth = useAuthStore()

const loginType = ref('email')
const email = ref('')
const password = ref('')
const phone = ref('')
const rememberMe = ref(false)

function onSubmit(){
    if (
        (loginType.value === 'email' && email.value === 'gora@studio.ru' && password.value === '2024') ||
        (loginType.value === 'phone' && phone.value === '+79211231313')
        ) {
            auth.login()
            router.push('/home')
        } else {
            alert('Invalid credentials')
        }
}

</script>

<style scoped></style>