import React from "react";

function Footer(props) {
  let { list,clear } = props;

  let completed = list.filter(item => item.completed).length;
  let uncompleted = list.filter(item => !item.completed).length;

  return (
    <div className="todo-footer">
      <div style={{ display: list.length ? "block" : "none" }}>
        <span>{uncompleted} left</span>
        <span className="clear" onClick={()=>{ clear() }}>clear {completed} completed</span>
      </div>
    </div>
  );
}

export default Footer;
