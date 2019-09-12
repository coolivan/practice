<template>
    <div>
        <h3>用户中心</h3>
        <div class="flex">
            <ul class="aside">
                <router-link exact tag="li" :to="{name:'user'}">基本信息</router-link>
                <router-link tag="li" :to="{name: 'cart'}">购买车</router-link>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>




<style scoped>
.flex{
    display: flex;
    align-items: flex-start;
}
.aside{
    width: 150px;
    cursor: pointer;
    margin: 0;
}



</style>