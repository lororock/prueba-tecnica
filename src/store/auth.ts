import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state:()=>({
        token:''
    }),
    actions: {
        saveToken(token:any) {
            this.token = JSON.stringify(token);
            localStorage.setItem('token', token)
        }
    }
});