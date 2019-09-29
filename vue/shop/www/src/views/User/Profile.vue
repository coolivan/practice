<template>
    <div>
        {{user}}
    </div>
</template>

<script>
export default {
    name:'user',
    data(){
        return{
        }
    },
    computed:{
        user(){
            return this.$store.state.user.username
        }
    }
}
</script>