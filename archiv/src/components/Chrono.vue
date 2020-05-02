<template>
    <div>
        <h1>Chrono</h1>
        <button @click="changeBtnActionModule1">Change1</button>
        <button @click="changeBtnActionModule2">Change2</button>
        <br>
        {{ "flagDatesEmpty: " + flagDatesEmpty }}
        {{ " / flagAutoReglamentsEmpty: " + flagAutoReglamentsEmpty }}  {{ controls }}
        <hr>
        <div class="row">
            <!-- див с блоками "дата" -->
            <div v-if="!flagDatesEmpty"
                :class="classForDivGroupDates"
                >
                <div v-for="(block, index) in groupDates" 
                    :key="block.id_db" 
                    class="chronoblock inline-block"
                    >
                        <span>{{ block.blockName }}</span><span>{{ " [" + (index + 1) + "/" + groupDatesElemsCount + "]" }}</span>
                        <span>{{ block.date }}</span>
                </div>
            </div>
            <!-- див с блоками "авто" -->
            <div v-if="!flagAutoReglamentsEmpty"
                :class="classForDivGroupAutoReglaments"
                >
                <div v-for="(block, index) in groupAutoReglaments" 
                    :key="block.id_db" 
                    class="chronoblock inline-block"
                    >
                        <!-- блок для редактирования (скрытый по дефолту) -->
                        <div>
                            <div class="no_wrap">
                                <span title="название" class="spansRS">N:</span>
                                <input type="text"  class="form-control editInputBlockName" maxlength="20"
                                        :value="block.blockName"
                                >
                            </div>
                            <div>
                                <span title="группа" class="spansRS">G:</span>
                                <div v-if="!flagEdit" class="editInputBlockName-div">
                                    <select class="form-control group-select">
                                        <option>---</option>
                                        <option selected>groupAuto1</option>
                                        <option>Auto1</option>
                                        <option>groupAuto2</option>
                                    </select>
                                    <button type="button" class="btn btn-success newGroupNameBtn" 
                                            @click="flagEdit = !flagEdit"
                                            >new</button>
                                </div>
                                <div v-else  class="editInputGroupName-div">
                                <!-- <div> -->
                                    <input type="text"  class="form-control editInputGroupName" maxlength="20"
                                            value="" 
                                            placeholder="новая группа"
                                            >
                                </div>
                            </div>
                            <span title="регламент" class="spansRS">R:</span>
                            <input type="text"  class="form-control editInputReglament" maxlength="7"
                                    :value="block.reglament"
                                >
                            <span title="старт" class="spansRS">S:</span>
                            <input type="text" class="form-control editInputOdoStart" maxlength="7"
                                    :value="block.odoStart"
                                >
                        </div>
                        
                </div>
            </div>
        </div>
        
        <!--  {{ this.flagDatesEmpty }}
       {{ flagDatesEmpty }}
        {{ flagAutoReglamentsEmpty }} -->
        <!-- {{ chronoBlocks.groupAutoReglaments.length }} // <<< !!! здесь выдает ошибку "... 'length' of undefined", а в "chrono.js" все норм !!! -->
    </div>
</template>

<script>

    //import {mapState} from 'vuex';
    import {mapGetters} from 'vuex';
    //import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';
    
    export default {
        created(){
			//console.log(1);
			//this.$http.get('products.php');   <<< заняти11 2:20:30
            //this.$store.dispatch('products/loadItems');   <<< заняти11 2:26:20
               // ---^^^--- чтоб выиграть в скорости отправки запроса на серв, делаем этот запрос из "routes.js"
        },
                    /*     mounted(){
                            store.dispatch('chrono/groupDatesEmptyDefine');
                            //next();
                        }, */
        data() {
            return {
               flagEdit: false,
               // groupAutoReglaments: chronoBlocks.groupAutoReglaments
               /* DatesEmpty: this.chronoBlocks.groupDates, */  // <<< тут так не работает
               controls: []
            }
        },
        computed: {
			...mapGetters('chrono', {
                chronoBlocks: 'chronoBlocks',
                flagDatesEmpty: 'flagDatesEmpty',
                flagAutoReglamentsEmpty: 'flagAutoReglamentsEmpty'
			}),
			/* ...mapGetters('cart', {
				inCart: 'products'
            }), */
             /*isGroupDatesEmpty() {
                let i = 0;
                $.each(this.chronoBlocks.groupDates, () => { i++; });
                if (i > 0) this.groupDates = true;
            }, */
            //groupAutoReglaments: chronoBlocks.groupAutoReglaments
            classForDivGroupDates(){
              return (this.flagAutoReglamentsEmpty) ? "col col-sm-12" : "col col-sm-6";
            },
            classForDivGroupAutoReglaments(){
              //console.log(value);
              //console.log(process.env.VUE_APP_TITLE);
              //console.log(process.env.VUE_APP_SECRET);
              return (this.flagDatesEmpty) ? "col col-sm-12" : "col col-sm-6";
            },
            groupDatesElemsCount(){
                return (this.chronoBlocks.groupDates.length);
            },
            groupAutoReglamentsElemsCount(){
                return (this.chronoBlocks.groupAutoReglaments.length);
            },
                                groupDates(){
                                    return (this.chronoBlocks.groupDates);
                                },
                                groupAutoReglaments(){
                                    return (this.chronoBlocks.groupAutoReglaments);
                                },
            /* reglValue(){    // <<< не юзается
                if (this.chronoBlocks) {
                    for (let i = 0; i < this.groupAutoReglamentsElemsCount; i++){
                    //for (let i = 0; i < 11; i++){
                        this.controls.push({
                            index: true
                        });
                        console.log("888777ddd");
                    }
                }
               return "777";
            } */
		},
		methods: {
			/* ...mapActions('cart', {  // !!! НЕ СТИРАТЬ !!!
				addToCart: 'add',
				removeFromCart: 'remove'
            }) */
			//...mapMutations('chrono', {
			...mapActions('chrono', { 
				//flagAutoReglamentsEmpty: 'flagAutoReglamentsEmpty',
				changeBtnActionModule1: 'changeBtnAction1',
				changeBtnActionModule2: 'changeBtnAction2'
            }),
            //groupDates: this.chronoBlocks.groupDates,
            //groupAutoReglaments: this.chronoBlocks.groupAutoReglaments
                    /*     ChangeBtnClick() {
                            console.log("777");
                            console.log(this.flagAutoReglamentsEmpty);
                            //console.log(this.$store);
                        //this.$store.dispatch('chrono/ChangeBtnAction');
                        // this.flagAutoReglamentsEmpty = !this.flagAutoReglamentsEmpty;
                        //this.$state.flagAutoReglamentsEmpty = !this.$state.flagAutoReglamentsEmpty;
                            console.log(this.flagAutoReglamentsEmpty);
                        } */
        },
        beforeMount(){
        //created(){
            //for (let i1 = 0; i1 < this.chronoBlocks.length; i1++){
            //for (let i1 = 0; i1 < Object.keys(this.chronoBlocks).length; i1++){   // <<< Object.keys(array).length чета не работает тоже для объекта
            //for (let i = 0; i < this.chronoBlocks.groupAutoReglaments.length; i++){
            /* if (this.chronoBlocks) {
                for (let i = 0; i < this.groupAutoReglamentsElemsCount; i++){
                //for (let i = 0; i < 11; i++){
                    this.controls.push({
                        index: true
                    });
                    console.log("888777ddd");
                }
            } */
        }
    }

    /* function lengthObject(obj) {
        console.log("777");
        var j = 0;
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            j++;
        }
        return j;
    } */

</script>

<style>
    .chronoblock {
        border: 1px solid green;
        width: 100%;
        /* width: 360px;
        w
        height: 100px; */
        margin: 2px 5px;
    }
    .title-div {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .blockName, .groupName {
        white-space: nowrap;
    }
    .groupName {
        font-style: italic;
    }
    .spansRS {  /* спаны "R/S" инпутов */
        /* font-size: .8em; */
    }
    .spanStart {  /* спан "S" инпута */
        margin-left: 26px;
    }
    .editInputBlockName-div, .editInputGroupName-div {
        display: inline-block;
    }
    .editInputBlockName, .editInputGroupName, .editInputReglament, .editInputOdoStart {
        height: 1.25rem;
        text-align: center;
    }
    .editInputBlockName, .editInputGroupName {
        font-style: italic;
    }
    .editInputBlockName {
       width: 200px;
    }
    .editInputGroupName {
       display: inline-block;
       width: 200px;
    }
    .editInputReglament, .editInputOdoStart {
        width: 70px;
        /* font-size: 80%; */
        
    }
    .group-select {
       
        width: 100px;
        font-size: 80%;
        height: 20px;
        /* font-size: 80%;
        border: 1px solid #ced4da;
        border-radius: 3px; */
    }
    .newGroupNameBtn {
        border: 1px solid green;
        padding: 0 5px;
        margin-top: -3px;
        line-height: 20px;
        /* display: inline-block;
        height: 20px;
        vertical-align: middle; */
    }

                /* корректировка бутстраповских значений */
                    .form-control {
                        display: inline-block;  /* по дефолту block */
                        padding: 0; /* padding: .375rem .75rem;     <<< бутстраповские значения */
                    }
                    select.form-control:not([size]):not([multiple]) {
                        height: calc(1.25rem + 2px);    /* calc(2.25rem + 2px)    <<< бутстраповские значения */
                    }

                    
                /* ---^^^--- корректировка бутстраповских значений  ---^^^---  */
    .inline-block {
        display: inline-block;
    }
    .no_wrap {
        white-space: nowrap;
    }
</style>