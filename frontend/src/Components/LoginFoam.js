import React, { forwardRef } from "react";
import "./App.css";

export default class LoginFoam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }

  render() {
    return (
       <foam>
        <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname"  />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw"  />
                
            <button type="button" className="btn1">Login</button>

            <div className="container" >
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#!">password?</a></span>
            </div>
        </div>
    </foam>
     
    );
  }
}
