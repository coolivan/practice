import React, { useState,useEffect, useRef } from "react";

function Ref() {
    const [nub,setNub] = useState(0);
    const prev = useRef(nub);

    useEffect(()=>{
      prev.current = nub
    })
    /*
      先return 再useEffect,所以return里是上一次的值
    */

    return (
      <div>
        <p>current:{nub}</p>
        <p>before:{prev.current}</p>
        <p>
          <button onClick={()=>{setNub(nub+1)}}>add</button>
        </p>
      </div>
    )
}



export default Ref;
