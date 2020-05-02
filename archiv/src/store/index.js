import Vue from 'vue';
import Vuex from 'vuex';
            //import VueRouter from 'vue-router';
import $ from 'jquery';  // jQuery
global.$ = $;

//import VueAxios from 'axios';  // AXIOS

Vue.use(Vuex);
            //Vue.use(VueRouter);
        import menu from './modules/menu';
        import cart from './modules/cart';
    import chrono from './modules/chrono';
    import tvprogam from './modules/tvprogam';

export const store = new Vuex.Store({
    modules: {
        menu,
		chrono,
        cart,
        tvprogam
    },
    /* state: {     // вроде не нужны эти параметры когда юзаются модули
        
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        
    }, */

    //strict: true    // (т.н. "жесткий режим") при изменении "state" НЕ через мутации (например напрямую в компоненте) консоль будет выдавать ошибку
    strict: process.env.NODE_ENV !== 'production'    // (т.н. "жесткий режим") при изменении "state" НЕ через мутации (например напрямую в компоненте) консоль будет выдавать ошибку
});

/*             function myFunction() {     // <<< !!! из модулей не достается !!!
                console.log("myFunction777");
            } */