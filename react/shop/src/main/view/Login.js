import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }


    login(){
        let {onLogin,history:{push}} = this.props;
        console.log(this.props)

        if(typeof onLogin === 'function'){
            onLogin({
                username:this.usernameRef.current.value,
                password:this.passwordRef.current.value
            }).then(msg=>{
                alert(msg);
                push('/');
            }).catch(e=>alert(e))
        }
    }

    render(){
        return (
            <div className="login">
                <p><label>用户名</label>: <input type="text" ref={this.usernameRef}/></p>
                <p><label>密码</label>: <input type="password" ref={this.passwordRef}/></p>
                <p><button onClick={this.login.bind(this)}>登录</button></p>
            </div>
        )
    }
}