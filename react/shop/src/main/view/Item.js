import React from 'react';

export default class Item extends React.Component{

    render(){
        let items = this.props.items;

        console.log(this.props)
        let id = Number(this.props.match.params.id) || 0;
        let item = items.find(item=>item.id === id);

        return item?(
            <div>
              <h2>商品详情 - {item.name}</h2>
              <p>ID:{item.id}</p>
              <p>名称:{item.name}</p>
              <p>价格:￥ {(item.price / 100).toFixed(2)}</p>
            </div>
        ):<div>不存在该商品！</div>

    }
}