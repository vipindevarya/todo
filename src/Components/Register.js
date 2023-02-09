import React, { Component } from 'react'

 class Register extends Component {
       constructor(props){
         super(props);
         this.state={
            
            
         };}

   

  render() {
    return (<div>
  <div className='login'></div>
  

  <div className='d-flex justify-content-center'>
  <form style={{height:'550px'}} className='mt-5  bg-white shadow  p-4' onSubmit={this.props.submit}>
   <h2 className='display-6 text-center'>Create Account</h2>
   <p>{this.props.message}</p>
  <div className="form-group ">
    <label htmlFor="InputName">Name</label>
    <input required type="text"  className="form-control" id="InputName" name='name'  placeholder="Name"></input>
    
  </div>
  <div className="form-group mt-3">
    <label htmlFor="PhoneNo">Phone Number</label>
    <input required type="tel" className="form-control" id="PhoneNo" name='phonenumber' placeholder="Phone Number"></input>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="InputEmail1">Email address</label>
    <input required type="email" className="form-control" id="InputEmail1" name='email'  aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="InputPassword1">Password</label>
    <input required type="password" className="form-control" id="InputPassword1" name='password1' placeholder="Password"></input>
  </div>
  <div className="form-group mt-3">
    <label htmlFor="InputPassword2">Confirm Password</label>
    <input required type="password" className="form-control" id="InputPassword2" name='password2' placeholder="Confirm Password"></input>
  </div>
  
  <div className='d-flex justify-content-between'>
  <button type="submit" className=" btn btn-primary shadow mt-3">Register</button><p className='mt-3'>Have an account? <a onClick={this.props.loginToggler} href='#'>Log in</a></p>
  </div>
  </form>
  </div>
  </div>
    )
  }
}

export default Register