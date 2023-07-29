import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const usePortfolioStore = defineStore('portfolio', () => {
    
    const isLoggedIn = ref(false);
    const errorMessage = ref('');

    const handleLogin = async (credentials) => {

        errorMessage.value = '';
        const { email, password } = credentials;

        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            return errorMessage.value = error.message;
        }
        isLoggedIn.value = true;
    }

    const handleLogout = () => {
        supabase.auth.signOut();
        isLoggedIn.value = false;
    }

    const getUser = async () => {
        const { data } = await supabase.auth.getUser();

        if (data.user) {
            isLoggedIn.value = true;
        }
    }

    return {
        isLoggedIn,
        errorMessage,
        handleLogin,
        handleLogout,
        getUser,
    }

})
