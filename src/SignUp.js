import { Button ,Container,Row,Col} from "react-bootstrap";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [formInput,setFormInput]=useState({
        name:'',
        email:'',
        password:'',  
    })
    const [name,setName]=useState({name:''});
    const [email,setEmail]=useState({email:''});
    const [password,setPassword]=useState({password:''});
    const [gender,setGender]=useState({gender:''});

    const [error,setError]=useState('');

    const navigate=useNavigate();
    function handleOnSubmit(e){
        const username=name.name;
        const useremail=email.email;
        const userpassword=password.password;
        const userselect=gender.gender;

        e.preventDefault()
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
        console.log(username.length);
        if (!validPassword.test(userpassword)) {
            setError("password is incorrect");
            return
         }
        if(username.length ===0 || useremail.length ===0 || userpassword.length ===0 || userselect===0){
            setError('Please fill all required fields')
       }
       localStorage.setItem("user", JSON.stringify({ useremail, password }));
       navigate('/Login');
       return;
    }

    function handleOnchangeEmail(e){
        const name=e.target.name;
        const value=e.target.value;
        setEmail({[name]:value});    }
        function handleOnchangePassword(e){
            const name=e.target.name;
            const value=e.target.value;
            setPassword({[name]:value});    }
    function handleChangeName(e){
        const name=e.target.name;
        const value=e.target.value;
        setName({[name]:value});
     }
     function handleChangeSelect(e){
        const name=e.target.name;
        const value=e.target.value;
        setGender({[name]:value});
     }
    console.log(name,email,password,gender);
  return (
    <Container>
        <Row className='d-flex justify-content-center'>
            <Col>
    <Form onSubmit={(e)=>{handleOnSubmit(e)}} method='post' >
      <Form.Label>User Name</Form.Label>
      <Form.Control  defaultValue={name.name} value={name.name}  onChange={(e)=>{handleChangeName(e)}} name='name' type="text" placeholder="username" />
      <Form.Label >Email address</Form.Label>
      <Form.Control onChange={(e)=>handleOnchangeEmail(e)} value={email.email} name='email' type="email" placeholder="name@example.com" required />
      <Form.Label>Password</Form.Label>
      <Form.Control  onChange={(e)=>handleOnchangePassword(e)} value={password.password} minLength={8} name='password' type="password" placeholder="password" required />
      <Form.Label>Gender</Form.Label>
      <Form.Select name='gender' onChange={(e)=>{handleChangeSelect(e)}} className='mt-2 mb-2'>
        <option value='male'>gender</option>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </Form.Select>
      <Button type='submit' className="mt-2">SignUp</Button>
    </Form>
    <div>{error}</div>
    </Col>
    </Row>
    </Container>
  );
};
export default SignUp;
