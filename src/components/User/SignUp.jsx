import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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

  const signupHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!validityCheck()) {
      setError({ message: "enter valid input" });
      return;
    }
    const response = fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBX3cN7Q6nlKsiwbkxlDXzH0bkZNZdxzCo",
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
          alert("User Successfully signed up");
          setTimeout(() => {
            history.push("/login");
          }, 1000);
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              alert("Error Signing up", error.data.message);
            }
          });
        }
      })
      .catch(err);
    {
      console.log(err);
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    setTsEntering(false);
    const { name, value } = e.target;
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
        <label htmlFor="name">email</label>
        <input
          type="nsme"
          onChange={handleChange}
          name="nsme"
          value={formData.email}
          id="nsme"
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
        <input type="password" onChange={handleChange} id="password" />
        <label htmlFor="number">email</label>
        <input
          type="number"
          onChange={handleChange}
          name="number"
          value={formData.email}
          id="number"
        />
        {isLoading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <Button type="submit">SignUp</Button>
        )}
      </Form>
      <NavLink to="/login">Existing User: Login</NavLink>
    </Container>
  );
};

export default SignUp;
