import React, { useState, useEffect, useRef, useMemo } from "react";

function Memo() {
    const [nub,setNub] = useState(0);
    const prev = useRef(nub);

    let age = useMemo(()=>{
      console.log(1);
      return nub>=18?'成年人':'未成年'
    },[nub])

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
        <p>age:{age}</p>
        <p>
          <button onClick={()=>{setNub(nub+2)}}>add</button>
        </p>
      </div>
    )
}



export default Memo;
