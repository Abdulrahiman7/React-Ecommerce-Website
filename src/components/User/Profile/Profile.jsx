import React, { Fragment, useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../../../store/Auth-context";
import { useHistory, NavLink } from "react-router-dom";

const Profile = () => {
  const { isLoggedIn, token, logout } = useContext(AuthContext);
  const [password, setPassword]=useState("");
    const history=useHistory();
  const updatePasswordHandler=(event)=>{
    event.preventDefault();
    const response = fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBX3cN7Q6nlKsiwbkxlDXzH0bkZNZdxzCo",
        {
          method: "POST",
          body: JSON.stringify({
            idToken:token,
            password:password,
            "returnSecureToken": false
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res)=>{
            if(res.ok)
            {
                alert('Password update Successfully, you will be redirected to login page');
                setTimeout(()=>{
                    
                    logout();
                    history.replace('/login');
                },1000)
            }else throw new Error();
        })
        .catch((err)=>console.log(err))
  }

  return (
    <Fragment>
      {!isLoggedIn && <NavLink to="/login">Please Login to Continue</NavLink>}
      {isLoggedIn && (
        <Container>
          <Form onSubmit={updatePasswordHandler}>
            <label htmlFor="password">Enter New Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Button type="submit">Update Password</Button>
          </Form>
        </Container>
      )}
    </Fragment>
  );
};

export default Profile;
