import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AddressBookForm from './components/AddressBookForm.vue'
import EditForm from './components/EditForm.vue'
import LoginPage from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import HeaderPage from './components/Header.vue'

const routes= [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        beforeEnter: (to, from, next) => {
            if(localStorage.storedData == undefined){
                return next({
                    name: 'LoginPage'
                })
            }
            next()
        }
    },
    {
        path: '/addressform',
        name: 'AddressBookForm',
        component: AddressBookForm,
        beforeEnter: (to, from, next) => {
            if(localStorage.storedData == undefined){
                return next({
                    name: 'LoginPage'
                })
            }
            next()
        }
    },
    {
        path: '/editform/:id?',
        name: 'EditForm',
        component: EditForm
    },
    {
        path: '',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/header',
        name: 'HeaderPage',
        component: HeaderPage,
    },
];
const router = createRouter({
     history: createWebHistory(),
     routes
})

export default router