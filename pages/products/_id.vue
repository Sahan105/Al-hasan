<template>
    <Collection :slug="getCategory()" />
</template>

<script>
import Collection from '../collection/list-view.vue'
export default {
    props: [ 'id' ],
    components: {
        Collection
    },
    data(){
        return {
            category_id:"",
        }
    },
    methods:{
        getCategory(){
            return this.$route.params.id;
        }
    
    }
}
</script>

<style>

</style>