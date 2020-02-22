import Vue from 'vue';
import Vuex from 'vuex';
import globalAxios from 'axios';

import axios from './axios-auth';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser(state, user) {
            state.user = user;
        },
        clearAuthData(state) {
            state.idToken = null;
            state.userId = null;
        }
    },
    actions: {
        setLogoutTimer(context, expirationTime) {
            setTimeout(() => context.commit('clearAuthData'), expirationTime * 1000);
        },
        signup(context, authData) {
            axios
                .post("/accounts:signUp?key=[YOURAPIKEY]", {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    context.commit('authUser', { token: res.data.idToken, userId: res.data.localId });
                    localStorage.setItem('token', res.data.idToken);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('userId', res.data.localId);
                    context.dispatch('setLogoutTimer', res.data.expiresIn);
                    context.dispatch('storeUser', authData);
                })
                .catch(error => console.log(error));
            router.replace('/dashboard');

        },
        login(context, authData) {
            axios
                .post(
                    "/accounts:signInWithPassword?key=[YOURAPIKEY]",
                    {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    }
                )
                .then(res => {
                    console.log(res);
                    context.commit('authUser', { token: res.data.idToken, userId: res.data.localId });
                    localStorage.setItem('token', res.data.idToken);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('userId', res.data.localId);
                    context.dispatch('setLogoutTimer', res.data.expiresIn);
                })
                .catch(error => console.log(error));
            router.replace('/dashboard');
        },
        tryAutoLogin(context) {
            const token = localStorage.getItem('token');
            if (!token)
                return;
            const expirationDate = localStorage.getItem('expirationDate');
            const now = new Date();
            if (now >= expirationDate)
                return

            const userId = localStorage.getItem('userId');
            context.commit('authUser', { token, userId });
        },
        logout(context) {
            context.commit('clearAuthData');
            localStorage.removeItem('expirationDate');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            router.replace('/signin');
        },
        storeUser(context, userData) {
            if (!context.state.idToken) { return; }
            globalAxios.post('/users.json' + '?auth=' + context.state.idToken, userData)
                .then(res => console.log(res))
                .then(err => console.log(err));
        },
        fetchUser(context) {
            globalAxios.get('/users.json' + '?auth=' + context.state.idToken)
                .then(res => {
                    console.log(res);
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    this.email = users[0].email;
                    context.commit('storeUser', users[0]);
                })
                .catch(err => console.log(err));
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isAuthenticated(state) {
            return state.idToken !== null;
        }
    }
})
