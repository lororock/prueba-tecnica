import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {

    const token = ref<string | null>('');

    const saveToken = (newToken: any) => {
        token.value = JSON.stringify(newToken);
        localStorage.setItem('token', token.value)
    }

    const setToken = (newToken: string) => token.value = newToken

    const logoutUser = () => {
        localStorage.removeItem('token')
        token.value = null
    }

    return {
        token, saveToken, logoutUser
    } as const;

});