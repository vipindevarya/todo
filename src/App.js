import './App.css';
import React, { Component } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import auth from './firebase';
import Todo from './Components/Todo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: null,
      phonenumber: null,
      email: null,
      password: null,
      isReg: false,
      isLog:false,
      message: ''

    }
  }

  loginToggler = () => {
    this.setState({ isReg: !this.state.isReg })

  }
  loginHandler = (e) => {
    e.preventDefault();
    const loginEmail = e.target.email.value;
    const loginPassword = e.target.password.value;
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(
      (data) => {
        this.setState({ message: 'Login Succesfully' ,isLog:!this.state.isLog})

      
      }
    ).catch(
      (err) => {
        this.setState({ message: err.message })
      
      }
    )

  }
  regHandler = (event) => {
    event.preventDefault();
    //get values from reg. form
    // const name = event.target.name.value;
    // const phonenumber = event.target.phonenumber.value;
    const email = event.target.email.value;
    const password = event.target.password1.value;
    const conformPassword = event.target.password2.value;
    if (password !== conformPassword) {
      this.setState({ message: 'password does not match' })
    }
    else {

      auth.createUserWithEmailAndPassword(email, password).then(
        (userData) => {
          this.setState({ message: 'Registered Successfully' }, () => {
            event.target.name.value = '';
            event.target.phonenumber = '';
            event.target.email.value = '';
            event.target.password1.value = '';
            event.target.password2.value = '';
          });
          console.log(userData);
        }
      ).catch(
        (err) => {
          this.setState({ message: err.message });
          console.log(err.message);
        }
      )


    }
  }

  render() {

    return (
      <div>
        {this.state.isLog!==true?<Todo></Todo>:
        
         (
          this.state.isReg === true ?
            <Login message={this.state.message} loginToggler={this.loginToggler} loginHandler={this.loginHandler}></Login>
            :
            <Register message={this.state.message} loginToggler={this.loginToggler} submit={this.regHandler}></Register>
         )
         }
      </div>
    )
  }
}

export default App