<template>
    <div class="Card rounded-lg overflow-hidden h-60 mx-5 ms:mx-auto text-xs md:text-md 4xl:text-lg text-black hover:text-blue-600" @click="openCard(university.universitySourceName, university.universitySourceId)">
        <div class="bg-gray-200 rounded-lg overflow-hidden shadow-2xl relative h-full">
            <p class="absolute w-full bg-white bg-opacity-80 p-5 bottom-0 block">
                {{ university.universitySourceName }}
            </p>
            <img class="h-full w-full object-cover object-center" :src="university.universitySourceImageLink">
        </div>
    </div>
</template>

<script>
    import {analytics} from '../../main.js'

export default {
    name: 'university',
    props: ['university', 'index'],
    

        data () {
            return {
                random:'',
            }
        },

    created(){
        this.random = Math.round(Math.random()*1000)
    },
    
    methods: {
        openCard(nameUniversity, idUniversity) {
            analytics.logEvent({nameUniversity}, {nameUniversity})
            this.$emit('onClick', idUniversity)
        }
    }
}
</script>