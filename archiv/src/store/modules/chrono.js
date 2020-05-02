//import Vue from 'vue';
//import Axios from 'axios';

export default {
	namespaced: true,
	state: {
		//chronoBlocks: getProducts(),	// <<< занятие11 1:22:15 (переделывается и комментится на 2:25:35)
		chronoBlocks: [],
		flagDatesEmpty: true,	// флаг "пустой или нет" массив "Dates", чтоб менять класс у дива с "Датами"
		flagAutoReglamentsEmpty: true	// флаг "пустой или нет" массив "Регламент", чтоб менять класс у дива с "Регламентом"
	},
	getters: {
		chronoBlocks(state){ return state.chronoBlocks; },
		someData(state){ return state.someData; },
		flagDatesEmpty(state){ return state.flagDatesEmpty; },
		flagAutoReglamentsEmpty(state){ return state.flagAutoReglamentsEmpty; }
	},
	mutations: {
		clearChronoBlocks(state){ state.chronoBlocks = []; }, // <<< для того, чтоб список блоков обновлялся каждый раз при перезагрузке страницы, а не брался из кеша
		loadChronoBlocks(state, data){ state.chronoBlocks = data.chronoBlocks; },	// присваиваем данные хроноблоков (из ДБ)
		DatesEmptyDefine(state, value){ state.flagDatesEmpty = value; },	// присваиваем значение флага "пустой или нет" массив "Dates"
		AutoReglamentsEmptyDefine(state, value){ state.flagAutoReglamentsEmpty = value; },	// присваиваем значение флага "пустой или нет" массив "Регламент"
		
		ChangeBtnAction1(state){
			//console.log("Yahooooею!!!");
			state.flagDatesEmpty = !state.flagDatesEmpty;
		},
		ChangeBtnAction2(state){
			state.flagAutoReglamentsEmpty = !state.flagAutoReglamentsEmpty;
		}
	},
	actions: {
		//loadChronoBlocks(store){ 
		loadChronoPageData(store){ 
			store.commit('clearChronoBlocks');
			setTimeout( () => {		//<<< AJAXrequest 
				let response = getChronoPageDataShablon();
				store.commit('loadChronoBlocks', response);		// отправляем в мутации данные хроноблоков (из ДБ)
				store.dispatch('groupDatesDefine', response);		// определяем значение флага "пустой или нет" массив "Dates"
				store.dispatch('groupAutoReglamentsEmptyDefine', response);		// определяем значение флага "пустой или нет" массив "Регламент"
			}, 1000);		//<<< AJAXrequest 
					/* 			let params = {"test2": "1"};
								$.ajax({
									type: "POST",
									url: "./backphp/chrono.php",
									//url: "http://localhost/backphp/chrono.php",
									dataType: "json",
									
									error: function(response){
										console.log(response);
									},
									success: function(response){
										//console.log("777 from myAjax");
										console.log(response);
										store.commit('loadChronoBlocks', response);
									}
								}); */
			//console.log("Yahooooею!!!");
		},
		groupDatesDefine(store, data){	// в этой ф-ии проверяем пустой массив "Dates" или нет (!!! в "Chrono.vue так не работает !!!")
			console.log(data.chronoBlocks.groupDates.length);
			if (data.chronoBlocks.groupDates.length > 0) store.commit('DatesEmptyDefine', false);
		},
		groupAutoReglamentsEmptyDefine(store, data){	// в этой ф-ии проверяем пустой массив "Регламент" или нет (!!! в "Chrono.vue так не работает !!!")
			console.log(data.chronoBlocks.groupAutoReglaments.length);
			if (data.chronoBlocks.groupAutoReglaments.length > 0) store.commit('AutoReglamentsEmptyDefine', false);
						/* let i = 0;		// !!! тоже рабочий способ !!! 
								//$.each(store.chronoBlocks.groupDates, (index, value) => { i++; console.log(index); });
							$.each(data.chronoBlocks.groupAutoReglaments, () => { i++; });
							console.log(i);	
							if (i > 0) store.commit('AutoReglamentsEmptyDefine', false); */
		},
				
						changeBtnAction1(store) {
							//console.log("Yahooooею!!!");
							store.commit('ChangeBtnAction1');
							
						},
						changeBtnAction2(store) {
							//console.log("Yahooooею!!!");
							store.commit('ChangeBtnAction2');
							
						}
	}
};

function getChronoPageDataShablon(){			// <<< !!! шаблон ответа сервера !!!
	return {
		someParam1: [],
		someParam2: [],
		someParam3: [],
		chronoBlocks: {
			groupDates: [
				{
					id_db: "10",
					groupName: "BirthDate",
					blockName: 'DateName1',
					date: "2001-01-01",
					cycle: "m"
				},
				{
					id_db: "20",
					groupName: "group2",
					blockName: 'DateName2',
					date: "2002-02-02",
					cycle: "y"
				},
				{
					id_db: "30",
					groupName: "group3",
					blockName: 'DateName3',
					date: "2003-03-03",
					cycle: "y"
				}
			],
			groupAutoReglaments: [
				{
					id_db: "101",
					groupName: "groupAuto1",
					blockName: 'value',
					percent: '77',
					distance: '77',		// !!! не юзается еще
					elapsed: '77',		// пройденная дистанция
					left: '15',			// сколько осталось
					odoStart: '120000',		// показание одометра в начале отсчета
					reglament: "20000"
				},
				{
					id_db: "102",
					groupName: "groupAuto1",
					blockName: 'value',
					percent: '72',
					distance: '72',
					elapsed: '72',
					left: '22',
					odoStart: '120000',
					reglament: "25000"
				},
				{
					id_db: "103",
					groupName: "Auto1",
					blockName: 'value',
					percent: '64',
					distance: '64',
					elapsed: '64',
					left: '38',
					odoStart: '120000',
					reglament: "30000"
				},
				{
					id_db: "201",
					groupName: "groupAuto2",
					blockName: 'value',
					percent: '38',
					distance: '38',
					elapsed: '38',
					left: '64',
					odoStart: '120000',
					reglament: "30000"
				},
				{
					id_db: "202",
					groupName: "groupAuto2",
					blockName: 'value',
					percent: '25',
					distance: '25',
					elapsed: '25',
					left: '72',
					odoStart: '120000',
					reglament: "30000"
				},
				{
					id_db: "301",
					groupName: "groupAuto3",
					blockName: 'value',
					percent: '5',
					distance: '15',
					elapsed: '77',
					left: '77',
					odoStart: '120000',
					reglament: "30000"
				}
			]
		}
	}
}
/* 			let array = [
				{
					id_product: 10,
					title: 'Iphone 5',
					price: 20000
				},
				{
					id_product: 20,
					title: 'Iphone 6',
					price: 25000
				},
				{
					id_product: 30,
					title: 'Iphone 7',
					price: 30000
				}
			]; */
 //=================================================================
								//Vue.http.post('backphp/products.php')  //  <<< заняти11 2:19:20 && 2:24:00+
								//Vue.http.post('chrono.php')  //  <<< заняти11 2:19:20 && 2:24:00+
								/* Vue.http.post('chrono.php', {test: "1"})	// !!! не работает в Денвере (Denwer) !!!
											//.then((response) => { console.log(response.data); // <<< !!! так возвращает содержимое файла "backphp/chrono.php" при GET запросе
											.then(response => response.json())
											.then(data => {
												console.log("777 from myAjax");
												console.log(data);   
											//store.commit('loadChronoBlocks', data);
											
										}); */
								//Axios.get('https://dka-develop.ru/api?type=hashtag/').then((response) => { console.log(response.data); });
										/*Axios.post('./backphp/chrono.php', {test: "1"}) 
												//.then((response) => { console.log(response.data);   // <<< !!! так возвращает содержимое файла "backphp/chrono.php"
												.then(response => response.data.json())
												.then(data => {
													console.log(data);   
													//store.commit('loadChronoBlocks', data);
												}); */
//=================================================================
/* function request() {
	console.log("888");
	var send;
	var xmlhttp = getXmlHttp();
	//xmlhttp.open("POST", "../backphp/chrono.php", true);
	xmlhttp.open("POST", "./backphp/chrono.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//send = "test=" + encodeURIComponent(JSON.stringify(collect_action_data));
	send = "test=1";
	xmlhttp.send(send);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				var response = xmlhttp.responseText;
				console.log(response); 
				response = JSON.parse(response);
				if (response == 1) {
					//location.reload();
				} else { 
					console.log(response); 
					
					
				}
			}
		}
	}
}
function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
} */
//=================================================================
