// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }

    }
    
    render() {
        let button;
        if (this.state.secondsLeft === 0) {
           button = <div>Boom!</div>
        } else {
            button = <div>120 seconds left before I go boom!</div>
        }
    
        return (
          <div>
            {button}
          </div>
        )
    }

}

export default Bomb;



// let firstVal = "Boom!"
// let secVal = `{this.secondsLeft} seconds left before I go boom!`
      
// let test = () =>{
//     if(this.secondsLeft = 0){
//             firstVal = "Boom!"
//         }
//         else {
//             secVal
//         }
// }
// test()
//           return (
//             <div>{test}</div>
//           );