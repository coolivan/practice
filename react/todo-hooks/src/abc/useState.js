import React,{ Component,useState } from "react";

// class State extends Component{
//     state = {
//         name:'leo',
//         age:18
//     }
//     addAge = () => {
//         let {age} = this.state;
//         this.setState({
//             age:age+1
//         })
//     }
//     render(){
//         let {name,age} = this.state;
//         return (
//             <div>
//                 <p>name:{name}</p>
//                 <p>age:{age}</p>
//                 <p><button onClick={this.addAge}>+age</button></p>
//             </div>
//         )
//     }
// }


function State() {
    const [age,setAge] = useState(18);
    const [name,setName] = useState('coolivan');
    // 不能用箭头函数
    // addAge = ()=>{
    //     setAge(age+1)
    // }
    function addAge() {
        setAge(age+1)
    }
    return (
        <div>
            <p>name:{name}</p>
            <p>age:{age}</p>
            <p><button onClick={addAge}>+age</button></p>
            <p><button onClick={()=>{setAge(age+1)}}>+age</button></p>
        </div>
    )
}


export default State;