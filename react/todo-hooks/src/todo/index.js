import React, { useState } from "react";
import './index.css';
import Header from "./header";
import Footer from "./footer";
import Inner from "./inner";

function Todo() {
    const [list,setList] = useState([{
      id:1,
      val:'test',
      completed:true
    }]);
    console.log(list);

    function changeCompleted(id,completed) {
      list.forEach(item=>{
        if(item.id === id){
          item.completed = completed
        }
      })
      setList([...list]);
    }
    function remove(id) {
      setList(list.filter(item => item.id !== id));
    }

    function edit(id,val) {
      list.forEach(item => {
        if (item.id === id) {
          item.val = val
        }
      });
      setList([...list]);
    }

    function clear() {
      setList(list.filter(item=>!item.completed))
    }

    return (
      <div className="todo-wrap">
        <Header list={list} setList={setList}/>
        <Inner 
          list={list} 
          changeCompleted={changeCompleted}
          remove={remove}
          edit={edit}
        />
        <Footer list={list} clear={clear}/>
      </div>
    );
}



export default Todo;
