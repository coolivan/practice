import React from 'react';

export default class FriendGroup extends React.Component{

    expand = ()=>{
        this.props.onExpand(this.props.index)
    }


    render(){
        let {data,index,expandedIndex} = this.props;

        return (
            <div className={[
                "friend-group",
                expandedIndex === index ? 'expanded' : ''
            ].join(' ')}>
                <dt onClick={this.expand}>{data.title}</dt>
                {
                    data.list.map((v,k)=>(
                        <dd key={k}>{v.name}</dd>
                    ))
                }
            </div>
        )
    }
}