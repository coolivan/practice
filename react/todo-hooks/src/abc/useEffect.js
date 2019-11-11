// import React, { Component } from "react";
// class Effect extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "这是一个标题",
//       edit: false
//     };
//     this.refInput = React.createRef();
//   }
//   showEdit = e => {
//     e.persist();//保留事件，在异步回调中使用
//     let { edit } = this.state;
//     this.setState({
//       edit: !edit
//     },()=> {
//         if (e.type === "click") {
//             this.refInput.current.focus();
//         }
//     });
//   };
//   toEdit = e => {
//     this.setState({
//       title: e.target.value
//     });
//   };
//   render() {
//     let { title, edit } = this.state;
//     return (
//       <div>
//         {edit ? (
//           <p>
//             <input
//               type="text"
//               ref={this.refInput}
//               value={title}
//               onChange={this.toEdit}
//                 onBlur={this.showEdit}
//             />
//           </p>
//         ) : (
//           <p>
//             <span> {title} </span>
//             <button onClick={this.showEdit}>编辑</button>
//           </p>
//         )}
//       </div>
//     );
//   }
// }





import React, { useState, useEffect,useRef } from "react";
function Title(props) {
    let {title,showEdit} = props;
    return (
      <p>
        <span> {title} </span>
        <button onClick={()=>{showEdit(true)}}>编辑</button>
      </p>
    );
}
function Edit(props) {
    let { title, toEdit, showEdit } = props;
    const refInput = useRef(null);

    useEffect(()=>{
        // document.querySelector("#input").focus();
        refInput.current.select();
        return ()=>{
            console.log('edit组件卸载了');
        }
    },[])

    return (
      <p>
        <input
          type="text"
          value={title}
          id="input"
          ref={refInput}
          onChange={e => {
            toEdit(e.target.value);
          }}
          onBlur={() => {
            showEdit(false);
          }}
        />
      </p>
    );
}

function Effect() {
    const [title,toEdit] = useState('这是一个标题');
    const [edit,showEdit] = useState(false);

    // useEffect(()=>{
    //     console.log('状态有改变！');
    //     edit && document.querySelector("#input").focus();
    // },[edit])
    /*
        数组可以监听多个数据，这里只监听edit
        空数组表示只监听挂载完成，也就是只执行一次
        return fn表示卸载阶段执行
    */

    return (
      <div>
        {edit ? (
          <Edit 
            title={title} 
            toEdit={toEdit} 
            showEdit={showEdit}
         />
        ) : (
          <Title
            title={title}
            showEdit={arg => {
              showEdit(arg);
            }}
          />
        )}
      </div>
    );
}



export default Effect;
