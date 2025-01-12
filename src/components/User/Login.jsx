import React, { useContext, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import {Prompt, NavLink} from "react-router-dom";
import AuthContext from "../../store/Auth-context";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isEntering, setTsEntering]= useState(false);
  const [isLoading, setIsLoading]=useState(false);
  const {login}=useContext(AuthContext);
  const validityCheck=()=>{
    return true;
  }
  const history=useHistory();

  const loginHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!validityCheck()) {
      setError({ message: "enter valid input" });
      return;
    }
    
    const response = fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBX3cN7Q6nlKsiwbkxlDXzH0bkZNZdxzCo",
      {
        method: "POST",
        body: JSON.stringify({
          email:formData.email,
          password:formData.password,
          "returnSecureToken": true
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json()
          .then((data)=> {
            const loginSuccess=login(data.idToken)
            
            history.push('/');
          });
          
        } else {
          setIsLoading(false);
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              alert("Error logging in", data.error.message);
            }
          });
        }
      })
      
  };

  const handleChange = (e) => {
    setTsEntering(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ [name]: "" });
  };

  const isEnteringHandler=()=>{
    setTsEntering(true);
  }
  return (
   
    <Container>
        {error && <Prompt when={error} message="please Enter valid input" />}
        {isEntering && <Prompt when={isEntering} message="you login data will be erased" />}
      <Form onSubmit={loginHandler} onFocus={isEnteringHandler}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          id="email"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          id="password"
        />
        {isLoading ? (
          <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        ) : (
          <Button type="submit">Login</Button>
        )}
      </Form>
      <NavLink to='/signup'>New User: Sign Up</NavLink>
    </Container>
  );
};

export default Login;
