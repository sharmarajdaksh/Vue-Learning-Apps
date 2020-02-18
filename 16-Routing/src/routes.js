import Home from './components/Home.vue';
import Header from './components/Header.vue'

const User = () => import(
    /* webpackChunkName: "user" */
    './components/user/User.vue');

const UserStart = () => import(
    /* webpackChunkName: "user" */
    './components/user/UserStart.vue');

const UserDetail = () => import(
    /* webpackChunkName: "user" */
    './components/user/UserDetail.vue');

const UserEdit = () => import(
    /* webpackChunkName: "user" */
    './components/user/UserEdit.vue');

export const routes = [
    {
        path: '', component: Home, components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user', components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            { path: '', component: UserStart },
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('Inside route setup');
                    next();
                }
            },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    { path: 'redirect', redirect: '/user' },
    { path: '*', redirect: '/' }
];