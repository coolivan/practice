import React from 'react';
import querystring from 'qs';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Pagination from '../components/Pagination';
class Home extends React.Component{

    constructor(props){
        super(props);

        // 排序
        let {location:{search}} = props;
        let q = querystring.parse(search,{ignoreQueryPrefix:true});
        let sort = q.sort || 'desc';
        this.state={
            sort:sort
        }
    }

    changeSort=({target:{value:sort}})=>{
        let {history:{push},location:{pathname}} = this.props;
        push(pathname+'?sort='+sort);

        this.setState({
            sort:sort
        })
    }

    render(){
        // console.log(this.props);
        let {items, match:{params:{page}} } = this.props;      
        let {sort} = this.state;
        items = items.sort((a,b)=> sort === 'asc' ? a.price - b.price : b.price - a.price);
        // 分页
        let pageSize=5; //每页5条
        let pages = Math.ceil(items.length/pageSize);
        page = parseInt(page)||1;
        items = items.slice((page-1)*pageSize,page*pageSize);
        
        return(
            <div>
                <h1>Home</h1>
                <hr/>
                <ul className="item-list">
                    <li className="head">
                        <span>名称</span>
                        <span>价格 
                            <select defaultValue={sort} onChange={this.changeSort}>
                                <option value="desc">从高到低</option>
                                <option value="asc">从低到高</option>
                            </select>
                        </span>
                    </li>
                    {
                        items.map(item=>(
                            <li key={item.id}>
                                <span>
                                    <Link to={'/item/' + item.id}>{item.name}</Link>
                                </span>
                                <span>￥ {(item.price / 100).toFixed(2)}</span>
                            </li>
                        ))
                    }
                </ul>
                <Pagination pages={pages} page={page}/>
            </div>
        )
    }
}

// export default connect( state=>({
//     items:state.items
// }))(Home);

export default Home;



