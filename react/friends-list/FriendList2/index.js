import React from 'react';
import './index.css';

import FriendGroup from './FriendGroup';

export default class FriendList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            expandedIndex:0
        }
    }

    changeExpandedIndex = (expandedIndex)=>{
        this.setState({
            expandedIndex
        })
    }

    render(){
        
        let {datas} = this.props;

        return (
            <div className="friend-list">
                {
                    Object.keys(datas).map((v,k)=>(
                        <FriendGroup 
                            data={datas[v]}
                            key={k}
                            index={k}
                            expandedIndex={this.state.expandedIndex}
                            onExpand={this.changeExpandedIndex}
                         />
                    ))
                }

            </div>
        )
    }

}
