<template>
    <div>
        <h2>Login</h2>
        <form>
            <p>
                <label for="">Name: ivan</label>
                <input type="text" name="name" ref="username">
            </p>
            <p>
                <label for="">Password: 123</label>
                <input type="password" name="password" ref="password">
            </p>
            <p>
                <input type="button" @click="login" value="Login">
            </p>
        </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'Login',
    data(){
        return {
        }
    },
    methods:{
        login(){
            let params = {
                username : this.$refs.username.value,
                password : this.$refs.password.value
            }
            axios({
                url: "/api/login",
                params
            })
            .then( ({data}) => {
                if(data.isLogin){
                    this.$store.commit('UPDATE_USER',data);
                    this.$router.push({name:'user'})
                }
            });
        }
    }
}
</script>

<style scoped>
label{
    display: block;
}
</style>