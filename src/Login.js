import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import auth_logo from './auth_logo.png';
import history from './history';
import swal from 'sweetalert';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: 'user',
      password: '****'
    }
    this.modifyInput = this.modifyInput.bind(this);
    this.checkCreds = this.checkCreds.bind(this);
  }

checkCreds(event){
  event.preventDefault();
  if(this.state.value === this.state.password){
    history.push('/Dashboard');
  }else{
    swal('Incorrect Password!','bad person!' ,'warning');
  }
  };

modifyInput(event){
  event.preventDefault();
  this.setState({value: event.target.value.replace(/./g, '*')});
};

  render() {
    const {checkCreds, modify} = this.state;
    return (
    <div className="LoginPage">
      <div className='flexSides'></div>
      <div className='flexMiddle'>
        <img id='houseImage' src={auth_logo} ></img>
          <form className='insideBox' action="/action_page.php">
          <br></br>
          <input type="text" name="username" placeholder="Username" value ={this.state.username} ></input>
          <br></br>
          <br></br>
          <input type="text" name="password" placeholder="Password" value ={this.state.value} 
          onChange={this.modifyInput}></input>
          <br></br>
          <input id='loginButton' type="submit" value="Login" onClick={this.checkCreds}></input>
          <input id='registerButton' type="submit" value="Register"></input>
        </form> 

      </div>
      <div className='flexSides'></div>
    </div>);
  }
}

export default Login;
