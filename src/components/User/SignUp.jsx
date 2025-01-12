import React, { useState } from "react";
import { useHistory, NavLink, Prompt } from "react-router-dom";
import { Form, Button, Container, Spinner } from "react-bootstrap";

const SignUp = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  
  });
  const [error, setError] = useState({});
  const [isEntering, setTsEntering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const validityCheck=()=>{
    return true;
  }

  const signupHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!validityCheck()) {
      setError({ message: "enter valid input" });
      return;
    }
    console.log(formData);
    const response = fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBX3cN7Q6nlKsiwbkxlDXzH0bkZNZdxzCo",
      {
        method: "POST",
        body: JSON.stringify({
            name:formData.name,
            email:formData.email,
            password:formData.password,
            number:formData.number,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          alert("User Successfully signed up");
          setTimeout(() => {
            history.push("/login");
          }, 1000);
        } else {
            setIsLoading(false);
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
                console.log(data.error);
              alert("Error Signing up", data.error.message);
            }
          });
        }
      })
    
    console.log(formData);
  };

  const handleChange = (e) => {
    setTsEntering(false);
    const { name, value } = e.target;
    if(!name) return;
    setFormData({ ...formData, [name]: value });
    setError({ [name]: "" });
  };

  const isEnteringHandler = () => {
    setTsEntering(true);
  };
  return (
    <Container>
      {error && <Prompt when={error} message="please Enter valid input" />}
      {isEntering && (
        <Prompt when={isEntering} message="you login data will be erased" />
      )}
      <Form onSubmit={signupHandler} onFocus={isEnteringHandler}>
        <label htmlFor="name">name</label>
        <input
          type="name"
          onChange={handleChange}
          name="name"
          value={formData.name}
          id="name"
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          id="email"
        />
        <label htmlFor="password">password</label>
        <input type="password" onChange={handleChange} id="password" value={formData.password} name="password"/>
        <label htmlFor="number">number</label>
        <input
          type="number"
          onChange={handleChange}
          name="number"
          value={formData.number}
          id="number"
        />
        {isLoading ? (
          <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        ) : (
          <Button type="submit">SignUp</Button>
        )}
      </Form>
      <NavLink to="/login">Existing User: Login</NavLink>
    </Container>
  );
};

export default SignUp;
