import React, { Component } from 'react'
import "../css/Box.css"

class Box extends Component{

    rand = () => Math.floor(Math.random()*5)+1
   
    state = {color: this.rand() }

    Colorchange = () => {
         this.setState({
            color: this.rand()
         })
    }
    render(){
        return(
            <div>
                <div className={`Box${this.state.color}`} onClick={this.Colorchange}></div>
            </div>
        )
    }
}

export default Box
