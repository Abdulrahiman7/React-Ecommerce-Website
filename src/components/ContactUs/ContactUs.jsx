import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const ContactUs = () => {
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const [contact, setContact]=useState("");
    const formHandler=async (event)=>{
        try{
            event.preventDefault();
            const newContact={
                name:name,
                email:email,
                number:contact
            }
            console.log(newContact);
            const response=await fetch('https://ecommerce-4cf32-default-rtdb.firebaseio.com/contact.json',
                {
                    method:'POST',
                    body:JSON.stringify(newContact),
                    headers:{
                        'Content-type':'application/json'
                    }
                }
            );
            if(!response.ok)
            {
                throw new Error();
            }
            console.log(response);
        }catch(err)
        {
            console.log(err);
        }
    }
  return (
    <Container>
        <Form onSubmit={formHandler}>
            <label htmlFor="name" >Name</label>
            <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="email" >Email</label>
            <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="contact" >Contact Number</label>
            <input type="number" id="contact" value={contact} onChange={(e)=>setContact(e.target.value)}/>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default ContactUs