import React, { useState } from "react";

function Header(props) {
  let [val, setVal] = useState("");
  let {list,setList} = props;  


    return (
      <div className="todo-header">
        <div className="todo-title">todo list</div>
        <div>
          <input
            type="text"
            value={val}
            placeholder="What needs to be done?"
            onChange={e => {
              setVal(e.target.value);
            }}
            onKeyDown={e => {
              if(e.keyCode === 13 && val){
                setList([...list,{
                  id:Date.now(),
                  val,
                  completed:false
                }])
                setVal('');
              }
            }}
          />
        </div>
      </div>
    );
}



export default Header;
