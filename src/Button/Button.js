import React from 'react'
import './Button.css'
class Button extends React.Component {
    render(){
        // const color = this.props.color
    const buttonStyle = {
        textStyle : {
            color:'red',
            frontSize:'30px',
            backgroundColor:'blue'
        }
    }

   
        return(
        <button id="button" className="button" style={buttonStyle.textStyle} >{this.props.label}</button>
        )
    }
}

export default Button