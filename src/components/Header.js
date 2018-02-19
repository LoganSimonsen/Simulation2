import React, { Component } from "react";
import "../App.css";
import auth_logo from '../auth_logo.png';
import history from '../history';

class Header extends Component {
    constructor(){
        super()
        this.state = {
          
        }
        this.logOff = this.logOff.bind(this);
      }
      logOff(event){
        event.preventDefault();
          history.push('/');
      }

  render() {
    return <div className="headerDB">
    <img id='imgOnHeader' src={auth_logo} ></img><b> Houser</b> Dashboard
    <button id='logoutButton' onClick={this.logOff} >Logout</button>
    </div>;
  }
}

export default Header;
