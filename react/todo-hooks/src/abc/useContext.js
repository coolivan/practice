import React,{ Component,createContext,useContext } from "react";

//方法一
// let {Provider,Consumer} = createContext();
// class Child extends Component {
//     render(){
//         return (
//             <Consumer>
//                 {(val)=>{
//                     console.log(val);
//                     return <div>这是从祖先传下来的：{val}</div>;
//                 }}
//             </Consumer>
//         )
//     }
// }
// class Parent extends Component {
//     render(){
//         return (
//             <div>
//                 <Child/>
//             </div>
//         )
//     }
// }
// class Context extends Component {
//     render(){
//         return (
//           <Provider value={'家传之宝'}>
//             <Parent />
//           </Provider>
//         );
//     }
// }



//方法二
// let myContext = createContext();//重点1
// class Child extends Component {
//   static contextType = myContext; //重点3
//   render() {
//     console.log(this.context);
//     return <div>这是从祖先传下来的：{this.context}</div>;
//   }
// }
// class Parent extends Component {
//     render(){
//         return (
//             <div>
//                 <Child/>
//             </div>
//         )
//     }
// }
// class Context extends Component {
//     render(){
//         return (//重点2
//           <myContext.Provider value={"家传之宝"}>
//             <Parent />
//           </myContext.Provider>
//         );
//     }
// }



//方法三
// let myContext = createContext();//重点1
// function Child() {
//     return (
//       //重点3
//       <myContext.Consumer>
//         {val => {
//           return <div>这是从祖先传下来的：{val}</div>;
//         }}
//       </myContext.Consumer>
//     );
// }

// class Parent extends Component {
//     render(){
//         return (
//             <div>
//                 <Child/>
//             </div>
//         )
//     }
// }
// class Context extends Component {
//     render(){
//         return (//重点2
//           <myContext.Provider value={"家传之宝"}>
//             <Parent />
//           </myContext.Provider>
//         );
//     }
// }



//方法四
let myContext = createContext();//重点1
function Child() {
  let val = useContext(myContext); //重点3
  console.log(val);
  return <div>这是从祖先传下来的：{val}</div>;
}
class Parent extends Component {
    render(){
        return (
            <div>
                <Child/>
            </div>
        )
    }
}
class Context extends Component {
    render(){
        return (//重点2
          <myContext.Provider value={"家传之宝"}>
            <Parent />
          </myContext.Provider>
        );
    }
}


export default Context;