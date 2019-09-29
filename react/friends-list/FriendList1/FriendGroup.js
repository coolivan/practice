import React from 'react';

export default class FriendGroup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            expanded:false
        }
        // 方法一
        // this.expanded = this.expanded.bind(this);
    }
    
    // expanded(){
    //     this.setState({
    //         expanded: !this.state.expanded
    //     })
    // }

    // 方法二
    expanded = () =>{
        this.setState({
            expanded:!this.state.expanded
        })
    }

    
    render(){
        let {data} = this.props;
        console.log(data);
        let expanded = this.state.expanded;

        return (
            <div className={
                ["friend-group",expanded && 'expanded'].join(' ')
            }>
                <dt onClick={this.expanded}>{data.title}</dt>
                {
                    data.list.map(list=>(
                        <dd key={list.name}>{list.name}</dd>
                    ))
                }
            </div>
        )
    }
}