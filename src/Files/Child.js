import React from "react";


class Child extends React.Component{
    render(){
        return(
            <div>
                Welcome to {this.props.details}
            </div>
        )
    }
}

export default Child;