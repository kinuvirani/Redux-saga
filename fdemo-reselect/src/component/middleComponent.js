import React from 'react'
import {aContext} from "../App";

class MiddleComponent extends React.Component{
    render(){
        return(
            <aContext.Consumer>
                {(value)=><div>Message from parentssssss:{value}</div>}
            </aContext.Consumer>
        )
    }
}
export default MiddleComponent
