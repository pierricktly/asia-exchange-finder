<template>

    <div class="mb-6 m-3 pb-2 bg-gray-200 rounded shadow-lg">
        <!-- Université + Ville + Pays-->
        <div class="relative w-full bg-blue-500 rounded-t-sm pb-1 xl:text-xl 2xl:text-2xl">
            <p class="px-2 font-bold text-white">{{university.universityPartnerName}}</p>
            <p class="font-bold text-white pl-2 xl:pl-0 xl:absolute xl:top-0 xl:right-2">{{university.universityPartnerCity}}, {{university.universityPartnerCountry}}</p>
        </div>
        <div v-if="!university.universityPartnerCondition && !university.universityPartnerSpeciality && !university.universityPartnerSpeciality" class="px-2 pt-3 4xl:text-lg">
            <p>We don't have more information about this partner. If you have any information please use edit mode to help us improve our database.</p>
        </div>
        <!-- Partner speciality -->
        <div v-if="university.universityPartnerSpeciality" class="p-2">
            <p class="mb-1 font-bold text-sm 2xl:text-base 4xl:text-xl">Partner's Majors :</p>
            <div class="relative inline-block mr-1 mb-1 bg-gray-300 py-1 px-2 rounded-full text-xs 4xl:text-base text-gray-700"  v-for="(PartnerSpeciality, index) in university.universityPartnerSpeciality" :key="index">
                    <tag :tags="PartnerSpeciality"/>
            </div>
        </div> 
        <!-- Partner Cycle -->
        <div v-if="university.universityPartnerCycle" class="p-2">
            <p class="mb-1 font-bold text-sm 2xl:text-base 4xl:text-xl">Partner's Cycle :</p>
            <div class="relative inline-block mr-1 mb-1 bg-gray-300 py-1 px-2 rounded-full text-xs 4xl:text-base text-gray-700"  v-for="(PartnerCycle, index) in university.universityPartnerCycle" :key="index">
                <tag :tags="PartnerCycle"/>
            </div>
        </div> 
        <!-- Exchange -->
        <div v-if="university.universityPartnerCondition" class="p-2">
            <p class="mb-1 font-bold text-sm 2xl:text-base 4xl:text-xl">Requirements :</p>
            <p class="whitespace-pre-line 4xl:text-lg">{{university.universityPartnerCondition}}</p>
        </div>
        <!-- universityPartnerWebsiteLink button -->
        <div class="container flex justify-center">
            <a v-bind:href="link" target="_blank">
                <button class="inline-block px-4 py-1 4xl:my-2 font-medium text-center text-white text-xs 4xl:text-xl leading-6 transition bg-blue-500 
                    rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-blue-900">
                    Website
                </button>
            </a>
        </div>
    </div>
    
</template>

<script>
    import Tag from '../Tag.vue'

  export default {

    components:{
        Tag
    },

    props: ['university'],

    data() {
        return{
            link: this.university.universityPartnerWebsiteLink,
        }
    },

    methods: {
        
    },

    

  };
</script>
