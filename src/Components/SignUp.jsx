import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export const SignUp = () => {
  return (
    <div className="signup-container">
    <h4>New Account</h4>
    <h6>Sign Up For Free, Now.</h6>
    <Form className="signup-form">
      <Form.Group className="mb-3" controlId="mobileAccount">
        
        <Form.Control type="text"  placeholder="Please enter mobile account"
        
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        
        <Form.Control type="password" placeholder="Please input password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        
        <Form.Control type="password" placeholder="please enter password again" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="invitationCode">
      
      <Form.Control type="text" placeholder=" Please enter the invitation code" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex align-items-end" controlId="verificationCode">
    
        <Form.Control type="text" placeholder="Verification code" />
        <Button variant="secondary" className="ml-2">Send</Button>
        {/* <button type="button" class="btn btn-outline-dark">Dark</button> */}
        
      </Form.Group>
      <Button variant="primary" type="submit" className="signup-button">Sign up</Button>
    </Form>
    <p>Already have an account? login now <a href="#">Log in</a></p>
  </div>
  );
};
