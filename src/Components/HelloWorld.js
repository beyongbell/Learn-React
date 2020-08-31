import React from 'react'


// Class
// class HelloWorld extends React.Component {
//     render() {
//         return (
//         <h1> Hello Class {this.props.name}</h1>
//         )
//     }
// }

// Function
function HelloWorld(props) {
    return (
        <div>
            <h1>Hello Function {props.name} </h1>
        </div>
    )
}

export default HelloWorld
