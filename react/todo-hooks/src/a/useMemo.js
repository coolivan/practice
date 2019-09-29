import React, { useState, useEffect, useRef, useMemo,useCallback } from "react";

function Memo() {
    const [nub,setNub] = useState(0);
    const prev = useRef(nub);

    let age2 = useCallback(() => {
      console.log('callback');
      return nub >= 18 ? "成年人" : "未成年";
    }, [nub]);

    let age1 = useMemo(()=>{
      console.log('memo');
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
        <p>
          age:{age2()} - {age1}
        </p>
        <p>
          <button
            onClick={() => {
              setNub(nub + 2);
            }}
          >
            add
          </button>
        </p>
      </div>
    );
}



export default Memo;
