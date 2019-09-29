<template>
    <div>
        <router-link :to="{name: 'book-boy'}">男生</router-link>
        <span> | </span>
        <router-link :to="{name: 'book-girl'}">女生</router-link>
        <p>PS:选择后存入localstorage，下次自动跳转</p>
    </div>
</template>