import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {

    const token = ref<string | null>('');
    const idUser = ref<string | null>('');

    const saveDatauser = (newToken: string, iduser: string) => {
        token.value = newToken;
        idUser.value = iduser;
        localStorage.setItem('token', newToken)
        localStorage.setItem('_id', iduser)
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('_id')
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