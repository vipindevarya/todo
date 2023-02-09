import React, { Component } from 'react';
 class Login extends Component {
       constructor(props){
         super(props);
         this.state={
          
         };}


  render() {
    return (<div>
  <div className='login'>

  </div>  
  <div className='d-flex justify-content-center' >
  <form className='mt-5 p-5  bg-white shadow rounded' onSubmit={this.props.loginHandler}>
  <p className='display-6 text-center'>Sign in</p>
  <p>{this.props.message}</p>
  <div className="form-group mt-3">
    <label htmlFor="InputEmail1">Email address</label>
    <input name='email' type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="InputPassword1">Password</label>
    <input name='password' type="password" className="form-control" id="InputPassword1" placeholder="Password"></input>
  </div>
  
  <button type="submit" className="w-100 btn shadow btn-primary mt-3">Login</button>
  <p className='mt-2 text-center'><a onClick={this.props.loginToggler} href='#'>Create</a> an account</p>
  </form>
  </div>
  </div>
    )
  }
}

export default Login