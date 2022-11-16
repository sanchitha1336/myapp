import { Button, Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

const Login = () => {
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const [error, setError] = useState("");
   const user=localStorage.getItem('user');
   const detail=JSON.parse(user);
     console.log(detail)
  const navigate = useNavigate();
  function handleOnSubmit(e) {
    const useremail = email.email;
    const userpassword = password.password;
    e.preventDefault();
    
    if ( useremail.length === 0 || userpassword.length === 0) {
      setError("Please fill all required fields");
      return
    }
    if(useremail !==detail.useremail){
        setError('Email or Password is incorrect')
        return;
    }
    if(userpassword !== detail.password.password){
        console.log(detail.password,userpassword)
        setError('Email or Password is incorrect')
        return;
    }
    localStorage.setItem("user", { useremail, password });
    navigate("/menu");
  }
  function handleOnchangeEmail(e) {
    const name = e.target.name;
    const value = e.target.value;
    setEmail({ [name]: value });
  }
  function handleOnchangePassword(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPassword({ [name]: value });
  }
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center sign-row">
          <Col>
            <Form
            className="mt-4"
              onSubmit={(e) => {
                handleOnSubmit(e);
              }}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => handleOnchangeEmail(e)}
                value={email.email}
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => handleOnchangePassword(e)}
                value={password.password}
                minLength={8}
                name="password"
                type="password"
                placeholder="password"
                required
              />
              <Button type="submit" className="mt-4 sign-button">
                Login
              </Button>
            </Form>
            <div className="error">{error}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
