<template>
    <div class="min-h-screen flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
        <div
            class="bg-[#1b1c1f]/80 p-6 rounded-xl shadow-lg w-full max-w-md border border-blue-400/50 backdrop-blur-sm">
            <h2 class="text-2xl font-semibold mb-6 text-blue-300 text-center">
                Войдите в аккаунт</h2>

            <div class="flex gap-4 mb-6 justify-center text-white">
                <label class="flex items-center gap-1">
                    <input type="radio" value="email" v-model="loginType" class="accent-blue-400" />
                    Почта
                </label>
                <label class="flex items-center gap-1">
                    <input type="radio" value="phone" v-model="loginType" class="accent-blue-400" />
                    Телефон
                </label>
            </div>

            <form @submit.prevent="onSubmit" autocomplete="on">
                <div v-if="loginType === 'email'" class="mb-4">
                    <input type="email" v-model="email" required placeholder="Почта" :class="[
                        'w-full bg-black/40 border p-2 rounded placeholder:text-blue-400 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-[0_0_12px_#3b82f6]',
                        isInvalid && loginType === 'email' ? 'border-red-500 ring-red-500 focus:ring-red-500 focus:shadow-[0_0_12px_#ef4444]' : 'border-blue-500/30'
                    ]" />
                    <input type="password" v-model="password" required placeholder="Пароль" :class="[
                        'w-full mt-3 bg-black/40 border p-2 rounded placeholder:text-blue-400 text-blue-100 focus:outline-none focus:ring-2',
                        isInvalid && loginType === 'email' ? 'border-red-500 ring-red-500 focus:ring-red-500 focus:shadow-[0_0_12px_#ef4444]' : 'border-blue-500/30 focus:ring-blue-400'
                    ]" />
                </div>

                <div v-if="loginType === 'phone'" class="mb-4">
                    <input type="tel" v-model="phone" v-mask="'+7 (###) ###-##-##'" required
                        placeholder="+7 (___) ___-__-__" :class="[
                            'w-full bg-black/40 border p-2 rounded placeholder:text-blue-400 text-blue-100 focus:outline-none focus:ring-2',
                            isInvalid && loginType === 'phone' ? 'border-red-500 ring-red-500 focus:ring-red-500 focus:shadow-[0_0_12px_#ef4444]' : 'border-blue-500/30 focus:ring-blue-400'
                        ]" />
                </div>


                <label class="block mb-4 text-blue-300 text-sm">
                    <input type="checkbox" v-model="rememberMe" class="mr-2 accent-blue-400" />
                    Запомнить меня
                </label>

                <p v-if="isInvalid" class="text-red-400 text-sm mb-4 text-center animate-pulse">
                    Неверные данные для входа
                </p>

                <button
                    class="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold w-full py-2 rounded shadow-md shadow-blue-500/40 hover:shadow-blue-500/80 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                    Вход
                </button>
            </form>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import { useAuthStore } from "../store/auth";



const router = useRouter()
const auth = useAuthStore()

const loginType = ref('email')
const email = ref('')
const password = ref('')
const phone = ref('')
const rememberMe = ref(false)
const isInvalid = ref(false)


function onSubmit() {
    const validEmail = loginType.value === 'email' &&
        email.value === 'gora@studio.ru' &&
        password.value === '2024'

    const validPhone = loginType.value === 'phone' &&
        phone.value === '+7 (921) 123-13-13'

    if (validEmail || validPhone) {
        isInvalid.value = false
        auth.login()
        router.push('/home')
    } else {
        isInvalid.value = true
    }
}





</script>

<style scoped></style>