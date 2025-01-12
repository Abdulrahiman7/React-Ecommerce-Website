import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {Prompt} from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isEntering, setTsEntering]= useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    if (!validityCheck()) {
      setError({ message: "enter valid input" });
      return;
    }
    const response = fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBX3cN7Q6nlKsiwbkxlDXzH0bkZNZdxzCo",
      {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        isLoading(false);
        if (res.ok) {
          alert("User Successfully logged in");
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              alert("Error logging in", error.data.message);
            }
          });
        }
      })
      .catch(err)
      {
        console.log(err);
      }
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
          id="password"
        />
        <Button type="submit">Login</Button>
      </Form>
      <NavLink to='/signup'>New User: Sign Up</NavLink>
    </Container>
  );
};

export default Login;
