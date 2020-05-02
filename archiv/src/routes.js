import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Chrono from './components/Chrono';
import Cart from './components/Cart';
import MainPage from './components/MainPage';
import TVProgram from './components/TVProgram';
import Checkout from './components/Checkout';
import E404 from './components/E404';

import {store} from './store';

const routes = [
    {
        name: 'mainpage',
        path: '',
        component: MainPage
    },
    {
        path: '/chrono',
        component: Chrono,
        beforeEnter(from, to, next){
			//store.dispatch('chrono/loadChronoBlocks');
			store.dispatch('chrono/loadChronoPageData');
			next();
		}
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/tvprogram',
        component: TVProgram
    },
    {
        path: '/checkout',
        component: Checkout
    },
    {
		path: '*',
		component: E404
	}
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});