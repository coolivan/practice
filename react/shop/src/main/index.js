import React from 'react';

import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
} from 'react-router-dom';

import Home from './view/Home';
import About from './view/About';
import Cart from './view/Cart';
import Item from './view/Item';
import Login from './view/Login';
import NotFound from './view/NotFound';

import './assets/css/index.css'

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // 当前登录的用户信息
            user: {
                id: 0,
                username: ''
            },
            users:[
                {
                    id: 1,
                    username: 'ivan',
                    password: '123456'
                },
                {
                    id: 2,
                    username: 'cool',
                    password: '123456'
                }
            ],
            items: [{
                    id: 1,
                    name: 'iPhone XR',
                    price: 542500
                },
                {
                    id: 2,
                    name: 'Apple iPad Air 3',
                    price: 377700
                },
                {
                    id: 3,
                    name: 'Macbook Pro 15.4',
                    price: 1949900
                },
                {
                    id: 4,
                    name: 'Apple iMac',
                    price: 1629900
                },
                {
                    id: 5,
                    name: 'Apple Magic Mouse',
                    price: 72900
                },
                {
                    id: 6,
                    name: 'Apple Watch Series 4',
                    price: 599900
                }
            ]
        }
    }


    login({username,password}){
        return new Promise((resolve,reject)=>{
            if(!username || !password){
                reject('请输入用户名和密码')
            }

            let user = this.state.users.find(user=>{
                return user.username === username && user.password === password;
            })
            console.log(user)

            if(user){
                resolve('登录成功')
            }else{
                reject('用户不存在或密码错误')
            }

            this.setState({
                user:{
                    id:user.id,
                    username:user.username
                }
            })
        })
    }


    render(){
        let {location:{pathname}} = window;
        return(
            <div>
            <Router basename={pathname}>
                <nav>
                    <NavLink to="/" activeClassName="active" activeStyle={{color:'red'}} isActive={(a,b)=>{
                        // return b.pathname === '/' || b.pathname.startsWith('/item')
                        return /^\/[(item/\d*)(\d*)]*$/.test(b.pathname)
                    }}>Home</NavLink>

                    <span> | </span>

                    <NavLink to="/about" activeClassName="active" activeStyle={{color:'red'}}>About</NavLink>

                    <span> | </span>

                    <NavLink to="/cart" activeClassName="active" activeStyle={{color:'red'}}>Cart</NavLink>

                    <span> | </span>

                    <NavLink to="/login" activeClassName="active" activeStyle={{color:'red'}}>Login</NavLink>

                </nav>

                <Switch>

                    <Route path="/:page(\d*)" render={props=>(<Home {...props} items={this.state.items} />)}></Route>
                    
                    <Route path='/item/:id(\d+)' render={props => {
                        return <Item {...props} items={this.state.items}/>
                    }} />

                    <Route path="/cart" render={props=>{
                        if(this.state.user.id>0){
                            return <Cart/>
                        }else{
                            return <Link to="/login">没有权限,请先登录</Link>
                            // return <Redirect to="/login"/>
                        }

                    }}></Route>

                    <Route path="/about" component={About}></Route>

                    <Route path="/login" activeClassName="active" activeStyle={{color:'red'}} render={props=>{
                        return <Login {...props} onLogin ={this.login.bind(this)} />
                    }}></Route>

                    <Route component={NotFound} />

                </Switch>
            </Router>
            </div>
        )
    }







}