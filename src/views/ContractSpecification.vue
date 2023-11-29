<template>
<div>
    <NavLinkJorneyVue/>
    <ComplementaryInfos/>
</div>
</template>

<script>
    import ComplementaryInfos from '../components/ComplementaryInfos.vue'
    import NavLinkJorneyVue from '../components/NavLinkJorney.vue'
   

    export default {
        components:{
            ComplementaryInfos,
            NavLinkJorneyVue
        }
    }
</script>