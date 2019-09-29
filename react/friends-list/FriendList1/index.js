import React from 'react';
import './index.css'

import FriendGroup from './FriendGroup';

export default class FriendList extends React.Component {
    render() {
        let {datas} = this.props;
        console.log(datas);
        return (
            // <div className="friend-list">
            //     {
            //         Object.keys(datas).map((k,v)=>(
            //             <div className="friend-group" key={k}>
            //                 <dt>{datas[k].title}</dt>
            //                 {
            //                     datas[k].list.map((list,index)=><dd key={index}>{list.name}</dd>)
            //                 }
            //             </div>
            //         ))
            //     }      
            // </div>

            <div className="friend-list">
                {
                    Object.keys(datas).map((k,v)=> <FriendGroup data={datas[k]} key={k} />)
                }
            </div>
      );
  }
}
