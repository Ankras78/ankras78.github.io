<template>
    <div id="app">
        <div class="container">
            <header>
                <div class="header">
                    <div class="row">
                        <div class="col col-sm-9">
                            <!-- <h1>Logo777</h1> -->
                            <router-link :to="{name: 'mainpage'} "><h1>Logo777</h1></router-link>
                        </div>
                        <div class="col col-sm-3">
                            <h1>In Cart</h1>
                        </div>
                    </div>
                    <hr>
                </div>
            </header>
            <section>
                <div class="content">
                    <div class="row">
                        <div class="col-xs-2 col-sm-2 menu">
                            <ul class="list-group">
                                <router-link v-for="(item, index) in menuList"
                                            :key="index"
                                            :to="item.url"
                                            tag="li"
                                            class="list-group-item"
                                            active-class="active"
                                            >
                                    <a>{{ item.text }}</a>
                                </router-link>
                            </ul>
                        </div>
                        <div class="col-xs-8 col-sm-8">
                            <transition name="slide" mode="out-in">
                                <router-view></router-view>
                            </transition>
                        </div>
                        <div class="col-xs-2 col-sm-2 menu">
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('menu', {
				menuList: 'items'
			}),
			...mapGetters('cart', {
				lengthInCart: 'cnt'
			})
		}
	}
</script>

<style>
    body {
        background-color: #f4f4f4;
    }
    .container {
        outline: 1px dotted gray;
        /* max-width: 1000px;    // "container" <<< бутстраповский класс, поэтому эти параметры не нужны
        height: 100vh; */
    }
    .menu {
        border-right: 1px solid #ddd;
    }
    .list-group-item {
        transition: background 0.3s, color 0.3s;
    }
    .list-group-item a {
        text-decoration: none;
    }
    .list-group-item.active a {
        color: inherit;
    }
   /*  .slide-enter { } */
    .slide-enter-active {
        animation: slideIn 0.2s;
    }
    /* .slide-enter-to {} */
    /* .slide-leave {} */
    .slide-leave-active {
        animation: slideOut 0.2s;
    }
    /* .slide-leave-to {}
 */
    @keyframes slideIn {
        from{transform: rotateY(90deg);}
        to{transform: rotateY(0deg);}
    }
    @keyframes slideOut {
        from{transform: rotateY(0deg);}
        to{transform: rotateY(90deg);}
    }


</style>