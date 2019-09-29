import React, { useState, useEffect, useRef } from "react";

function Li(props) {
  let { item, changeCompleted, remove, checkEvery,edit} = props;
  const [display,changeDisplay] = useState(false);
  const refInput = useRef(null);
  useEffect(()=>{
    if(display){
      refInput.current.focus();
    }else{
        //如果为空值，则总是显示编辑框
        (item.val.trim() === '') && changeDisplay(true)
    }
  },[display,item])

  return (
    <li className={item.completed ? "done" : ""}>
      <div className="view" style={{ display: display ? "none" : "block" }}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={e => {
            changeCompleted(item.id, e.target.checked);
            checkEvery();
          }}
        />
        <label
          onDoubleClick={e => {
            changeDisplay(true);
          }}
        >
          {item.val}
        </label>
        <span
          onClick={() => {
            remove(item.id);
          }}
        >
          x
        </span>
      </div>
      <div style={{ display: display ? "block" : "none" }}>
        <input 
          type="text"
          value={item.val}
          ref={refInput}
          onChange={e=>{edit(item.id,e.target.value)}}
          onBlur={()=>{changeDisplay(false)}}
          onKeyDown={e=>{
            if(e.keyCode === 13){
              e.target.blur()
            }
          }}
        />
      </div>
    </li>
  );
}

function Inner(props) {
  let {list,changeCompleted} = props;

  function checkEvery() {
    return list.every(item=>item.completed === true)  
  }

  return (
    <div 
      className="todo-inner"
      style={{display:list.length?'block':'none'}}
    >
      <div>
        <input
          type="checkbox"
          onChange = {(e) => {
            list.map(item => changeCompleted(item.id, e.target.checked));
          }}
          checked={
            checkEvery()  
          }
        />
        <small>Mark all as complete</small>
      </div>

      <ul>
        {
          list.map(item=>(
            <Li 
              key={item.id} 
              item={item} 
              {...props}
              checkEvery={checkEvery}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default Inner;
