<template>
    <div class="w-full">
        <div class="p-2 w-full">
            <input class="tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full bg-gray-500 border border-gray-500 rounded focus:outline-none focus:border-white focus:border-4" 
            type="text" v-model="search" placeholder="University, City, Country.."/>
        </div>
        <ul class="w-full p-2 space-y-3">
            <li class="w-full" v-for="(partner, index) in filteredList.slice((page-1)*10, ((page-1)*10)+9)" :key="index">
                <button @click="editPartner(partner)" class="Button transition duration-500 ease-in-out bg-gray-700 hover:bg-red-800 shadow transform hover:-translate-y-1 w-full h-full flex justify-between rounded py-2 px-3">
                    <span>{{partner.universityPartnerName}}</span>
                    <span>{{partner.universityPartnerCity}}, {{partner.universityPartnerCountry}}</span>
                </button>
            </li>
            <li v-if="universityPartnerList.length <= 0" class="w-full">
                <span class="bg-gray-700 shadow-xl w-full h-full flex justify-center rounded py-2 px-3 font-semibold">No Partner</span>
            </li>
        </ul>
        <v-pagination class="w-full h-10 flex justify-center"
            v-model="page"
            :pages="numberPageTmp"
            :range-size="1"
            active-color="#DCEDFF">
        </v-pagination>
    </div>
</template>


<script>
    import VPagination from "vue3-pagination"
    import "vue3-pagination/dist/vue3-pagination.css"
    
    import ListPartnerEditor from './ListPartnerEditor.vue'
    import PartnerEditor from './PartnerEditor.vue'

    export default {

        components: {
            ListPartnerEditor,
            PartnerEditor,
            VPagination,
        },

        props: ['university'],

        data(){
            return {
                page: 1,
                numberPage: 1,
                numberPageTmp: 1,

                id: this.$route.query.id,
                listOfSpeciality:'',
                search: '',
                universityCycle: ["Bachelor", "Master", "Doctorate/PhD"],
                universityPartnerList: []
            }
        },

        created(){
            if(this.university.universitySourcerPartner != undefined) {
                this.universityPartnerList = this.university.universitySourcerPartner
                this.universityPartnerList.sort(function(a,b){
                    if(a.universityPartnerCountry && b.universityPartnerCountry) {
                        if(a.universityPartnerCountry.toLowerCase() > b.universityPartnerCountry.toLowerCase()) {return 1;}
                        if(a.universityPartnerCountry.toLowerCase() < b.universityPartnerCountry.toLowerCase()) {return -1;}
                    }
                    return 1;
                })
                this.numberPageTmp = Math.ceil(this.universityPartnerList.length/9)
            }
        },
        
        computed: {
            filteredList() {
                return this.universityPartnerList.filter(partner => {
                    return (partner.universityPartnerName.toLowerCase().includes(this.search.toLowerCase())
                        || partner.universityPartnerCountry.toLowerCase().includes(this.search.toLowerCase())
                        || partner.universityPartnerCity.toLowerCase().includes(this.search.toLowerCase()))
                })
            }
        },

        setup(props) {
            const logResult = (result) =>{
                props.university.universitySourcerPartner.universityPartnerSpeciality = result
            };
            return {
                logResult,
            };
        },

        methods:{
            editPartner(partner){
                this.$emit('editPartner', partner)
            },
        },
    }
</script>
