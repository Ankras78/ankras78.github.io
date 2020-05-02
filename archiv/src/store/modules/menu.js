export default {
	namespaced: true,
	state: {
		items: [
			{
				url: '/chrono',
				text: 'Chrono'
			},
			{
				url: '/tvprogram',
				text: 'TV Program'
			},
			{
				url: '/cart',
				text: 'Your Cart'
			},
			{
				url: '/checkout',
				text: 'Checkout'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	},
	mutations: {
		
	},
	actions: {
		
	}
};
