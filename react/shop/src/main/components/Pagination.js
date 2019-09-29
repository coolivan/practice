import React from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

class Pagination extends React.Component{

    static defaultProps = {
        pages:1,
        page:1
    }

    static propTypes ={
        pages:PropTypes.number,
        page:PropTypes.number
    }

    goto = (e)=>{
        let v = e.target.value;
        let {history:{push}} = this.props;
        if(e.keyCode===13 && v !== ''){
            push('/'+v);
            e.target.value = ''
        }
    }


    render(){
        let {pages,page} = this.props;

        return (
            <div className="pagination">
                {
                    (new Array(pages)).fill('').map((v,i)=>{
                        return (
                            <Link
                                key={++i}
                                className={i=== page ? 'active' : ''}
                                to = {'/'+ i}
                            >
                                {i}
                            </Link>
                        )
                    })
                }

                <span>前往<input type="text" className="goto" onKeyDown={this.goto} />页</span>
            </div>
        )
    }
}


export default withRouter(Pagination)
