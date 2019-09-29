<template>
  <div>
    <h2>商品列表</h2>
    
    <ul class="item-list">
      <li class="head">
        <span>名称</span>
        <span>
            价格 
            <select v-model="sort">
                <option value="desc">从高到低</option>
                <option value="asc">从低到高</option>
            </select>
        </span>
        <span>操作</span>
      </li>
      <li v-for="item of items" :key="item.id">
        <span>
          <router-link :to="{name: 'item', params: {itemId: item.id}}"  @mouseover.native="mouseover(item.id, $event)" @mouseout.native="mouseout" >{{item.name}}</router-link>
        </span>
        <span>{{item.price|RMB}}</span>
        <span>
          <button @click="addToCart(item,$event)">添加到购物车</button>
        </span>
      </li>
    </ul>

    <div class="tip" :style="{left: tip.left + 'px', top: tip.top + 'px'}" v-show="tip.isShow">
          <div>ID: {{tip.item.id}}</div>
          <div>Name：{{tip.item.name}}</div>
          <div>Price: {{tip.item.price}}</div>
    </div>
    <div class="loading" v-if="loading">
        <span>loading...</span>
    </div>
    <div class="addone" ref="addone">+1</div>
  </div>
</template>

<script>
import axios from "axios"
import Item from '@/views/Item'
import {RMB} from '@/filters/filters'

export default {
  name: "home",
  data() {
    return {
      items: [],
      tip: {
        item:[],
        isShow: false,
        left: 0,
        top: 0
      },
      loading:false,
      cart:[]
    };
  },
  components: {
    Item
  },
  filters: {
      RMB
  },
  computed: {
      sort: {
          get() {
              return this.$route.query.sort || 'desc';
          },
          set(newVal) {
              this.$router.push({name: 'home', query: {sort: newVal}});
          }
      }
  },
  created() {
    this.getItems();
  },
  watch: {
      $route(to, from) {
          // console.log('$route变了');
         //   也可以在路由update时监听
          this.getItems();
      }
  },
  methods: {
      getItems() {
        axios({
            url: "/api/items",
            params: {
                sort: this.sort
            }
        }).then(({ data }) => {
            this.items = data;
        });
      },

      // 加入购物车
      addToCart(item,{target}){
        this.$store.commit('ADD_CART',item);
        let addone = this.$refs.addone;
        let {left, top, width} = target.getBoundingClientRect();
        addone.style.left = left-30  + 'px';
        addone.style.top = top + 'px';
        addone.style.opacity = 1;
        let timer=0;
        clearTimeout(timer);
        timer = setTimeout(() => {
            addone.style.opacity = 0
        }, 1000);
      },

      mouseover(itemId, {target}) {
        let {left, top, width} = target.getBoundingClientRect();
        this.tip.isShow = true;
        this.tip.left = left + width + 10;
        this.tip.top = top;
        this.tip.item = this.items.find(_=>_.id === itemId);
      },
      mouseout() {
        this.tip.isShow = false;
      }
  },


  // beforeRouteUpdate(to, from, next) {
  //   这里跟wath 上面路由变化一样的效果
  //     console.log('beforeRouteUpdate', this);
  //     this.getItems();
  //     next();
  // },
  beforeRouteLeave(to, from, next) {
      if(to.name === 'item'){
          this.loading = true;
      }
      next();
  }
};
</script>
<style scoped>
ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.item-list li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px dotted #333;
}
.item-list li.head {
    font-weight: bold;
}
.item-list li span {
    min-width: 200px;
}
.tip {
  position: fixed;
  left: 0;
  top: 0;
  border: 1px solid #000;
  background: #fff;
  padding: 10px;
}
.loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

.addone{
  color: red;
  position: absolute;
  transition: 0.5s opacity;
  opacity: 0;
}

</style>
