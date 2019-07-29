import React from 'react';

export default class ControlledComponents extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            v1:'your email ',
            v2:'我是多行文本框',
            v3:{selected:'css',option:['html','css','js']},
            v4:['js','html'],
            v5:'女',
            v6: ['前端'],
        }
    }

    // change1 = (e)=>{
    //     console.log(e.target.value);
    //     this.setState({
    //         v1:e.target.value
    //     })
    // }

    // e.target.value 解构{target:{value:v1}
    // change1 = ({target:{value:v1}})=>{
    //     this.setState({
    //         v1
    //     })
    // }

    change1 = ({target:{value}})=>{
        this.setState({
            v1:value.toUpperCase()
        })
    }

    change2 = ({target:{value:v2}})=>{
        this.setState({
            v2
        })
    }

    // change3 = ({target:{value}})=>{
    //     this.setState(Object.assign(this.state.v3,{selected:value}))
    // }
    change3 = ({target:{value}})=>{
        this.setState({
            v3:{
                ...this.state.v3,
                selected:value
            }
        })
    }

    change4 = ({target:{options}})=>{
        this.setState({
            v4:[...options].filter(o=>o.selected).map(o=>o.value)
        })
    }
    change5 = ({target:{value:v5}})=>{
        this.setState({
            v5
        },()=>{
            console.log(this.state.v5);
        })
        
    }
    change6 = ({target:{value}})=>{
        let {v6} = this.state;

        if(v6.includes(value)){
            v6 = v6.filter(v=>v!==value);
        }else{
            v6.push(value)
        }
        
        this.setState({
            v6
        })
   

    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.v1} onChange={this.change1}/>

                <hr/>

                <textarea value={this.state.v2} onChange={this.change2}></textarea>

                <hr/>
                
                {/* 单选 */}
                <select value={this.state.v3.selected} onChange={this.change3}>
                    {
                        this.state.v3.option.map((v,k)=>(
                            <option key={k} index={k} value={v}>{v}</option>
                        ))
                    }
                </select>

                <hr/>

                {/* 多选 */}
                <select value={this.state.v4} onChange={this.change4} multiple>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="js">js</option>
                </select>
                
                <hr/>

                <label><input name="gender" type="radio" value="男" checked={this.state.v5==='男'} onChange={this.change5}/>男</label>   
                <label><input name="gender" type="radio" value="女" checked={this.state.v5==='女'} onChange={this.change5}/>女</label>   
                
                <hr/>
                <label><input name="interest" type="checkbox" value="前端" checked={this.state.v6.includes('前端')} onChange={this.change6} />前端</label>
                <label><input name="interest" type="checkbox" value="后端" checked={this.state.v6.includes('后端')} onChange={this.change6} />后端</label>

            </div>
        )
    }
}
