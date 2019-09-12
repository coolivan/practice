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

// 导航前加载数据
// 导航前加载数据
// 导航前加载数据

function getItem(itemId, next) {
    // vm.loading = true;
    axios({
        url: `/api/item/${itemId}`
    }).then(res => {
        // 注意 beforeRouteEnter 还不能获取组件实例
        next(vm => {
            vm.item = res.data;
        });
    }).catch(err => {
        next(vm => {
            vm.hasError = true;
            // vm.loading = false
        });
    });
}

export default {
    name: 'item',
    props: ['itemId'],
    data() {
        console.log(this.itemId);
        return {
            hasError: false,
            item: null,
            loading:false
        }
    },
    filters: { RMB },

    beforeRouteEnter(to, from, next) {
        // 这里还拿不到this，把请求函数放外面
        getItem(to.params.itemId, next);
    },

    // beforeRouteUpdate(to, from, next) {
    //     // 这里已经可以拿到this
    //      // console.log(this);
    // }    
}
</script>
