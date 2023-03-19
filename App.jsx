//Non-synthetic event

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor()
//     {
//         super()
//         this.state={
//             username :"Nirmala"
//         }
//     }

//     componentDidMount()
//     {
//         let btn=document.querySelector("button")
//         btn.addEventListener('click',()=>{
//             this.setState({username:this.state.username="Prashika"})

//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <button>SUBMIT</button>
//       </div>
//     )
//   }
// }


//Non-synthetic event

// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor()
//     {
//         super()
//         this.state={
//             username:""
//         }
//     }

//     componentDidMount()
//     {
//         let input=document.querySelector("input")
//          input.addEventListener("keypress",(e)=>{
//             this.setState({username:e.target.value})
//          })

        
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <input type="text"/>
//       </div>
//     )
//   }
// }

//synthetic event

import React from "react"
import { Component} from  "react"

export default class App extends Component{

    constructor()
    {
        super()
        this.state=
        {
            username:""
        }
    }
    render()
    {
        return(
            <>
            <h1>{this.state.username}</h1>
            <input type="text" onChange={(e)=>{
                this.setState({username:e.target.value})
            }} />
            </>
        )
    }
}

