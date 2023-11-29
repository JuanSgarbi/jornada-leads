<template>
    <component :is="feedbackComponent"></component>
</template>

<script >
    import Success from "../components/Success.vue"
    import Fail from "../components/Fail.vue"
    
    export default {
        name: "Sucesso Lead",
        components:{
           Success,
           Fail
        },
        data() {
            return {
            feedbackComponent: null,
            };
        },
        created() {
            const feedbackParam = this.$route.params.feedback;
            
            if (feedbackParam === 'sucesso') {
            this.feedbackComponent = Success;
            } else {
            this.feedbackComponent = Fail;
            }
        },
    }
</script>