import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {

    const token = ref<string | null>('');
    const idUser = ref<string | null>('');

    const saveDatauser = (newToken: string, iduser: string) => {
        token.value = JSON.stringify(newToken);
        idUser.value = JSON.stringify(iduser);
        localStorage.setItem('token', token.value)
        localStorage.setItem('_id', iduser)
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        token.value = null
    }

    const reloadUserData = () => {
        token.value = localStorage.getItem('token')
        idUser.value = localStorage.getItem('_id')
    }

    return {
        token, idUser, saveDatauser, reloadUserData, logoutUser
    } as const;

});