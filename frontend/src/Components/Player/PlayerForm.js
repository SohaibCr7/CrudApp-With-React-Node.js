import React from "react";
import axios from "axios";
class PlayerForm extends React.Component {
 
  submitPlayer(event){
    event.preventDefault();
    axios.post('http://localhost:8080/player' ,{
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
    })
    .then((response) =>{
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new Player </h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstname" ref={this.firstname} type="text" />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="firstlast" ref={this.lastname} type="text" />
              <label htmlFor="firstlast">First Last</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="phone" ref={this.phone} type="text" />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref={this.email} type="text" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add Player</button>
        </form>
      </div>
    )
  }
}

export default PlayerForm;
