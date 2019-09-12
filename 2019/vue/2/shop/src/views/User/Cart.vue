<template>
    <div>
        <ul>
            <li v-for="v in cart" >{{v}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'user',
    computed:{
        cart(){
            let {cart} = JSON.parse(sessionStorage.getItem('user')) || this.$store.state.user;
            console.log(cart);
            return cart ? cart : ['暂无商品']
            // return this.$store.state.user.cart
        }
    }
}
</script>