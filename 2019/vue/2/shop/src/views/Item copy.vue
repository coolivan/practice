<template>
    <div>
    
        <template v-if="loading">
            Loading......
        </template>

        <template v-if="hasError">
            <h2>没有该商品信息</h2>
        </template>

        <template v-if="item">
            <h2>商品详情</h2>

            <p>ID: {{item.id}}</p>
            <p>名称: {{item.name}}</p>
            <p>价格: {{item.price|RMB}}</p>
            
        </template>
    </div>
</template>
<script>
import axios from "axios"
import { RMB } from '@/filters/filters'

// 导航后加载数据
// 导航后加载数据
// 导航后加载数据

export default {
    name: 'item',
    props: ['itemId'],
    data() {
        return {
            hasError: false,
            item: null,
            loading:false
        }
    },
    filters: { RMB },
    watch: {
        itemId() {
            this.getItem();
        }
    },

    created(){
        this.getItem()
    },
    methods:{
        getItem(){
            this.loading = true;
            axios({
                url:'/api/item/'+(this.itemId),
            }).then(({data})=>{
                this.item = data;
                this.loading = false;
            })
        }
    },

}
</script>
