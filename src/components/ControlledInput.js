// Code ControlledInput Component Here
import React, { Component } from 'react';

class ControlledInput extends Component {
    state = {
        firstName: "John",
        lastName: "Henry"
    }
    //Controlled Form method
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    //Controlled Form method
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }


    render() {
        return(
            //Controlled Form
            <form>
                <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
                <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
            </form>
        )
    }
}
export default ControlledInput;


//****CONTROLLED FORM***
// import React from 'react';
 
// class ControlledInput extends React.Component {
//   state = {
//     value: '',
//   }
 
// handleSubmit = event => {
//     event.preventDefault()
//     const firstName = event.target.children[0].value
//     const lastName = event.target.children[1].value
//     this.sendFormDataSomewhere({ firstName, lastName })
//   }


//   handleChange = event => {
//     this.setState({
//       value: event.target.value,
//     });
//   }
 
//   render() {
//     return (
//       <form onSubmit={event => this.handleSubmit(event)}>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }
 
// export default ControlledInput;