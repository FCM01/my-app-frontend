import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"

const Login = ({addUser}) => {
    const  [name,setName] = useState("")
    const  [email,setEmail] = useState("")


    const Submit= (e)=>{
        e.preventDefault()

        if(!email){
            alert("Please provide a email")
            return
        }
        if(!name){
            alert("Please provide a email")
            return
        }
        // const user_id  = Math.floor(Math.random() *10000)+ 1
        addUser({email,name})

        setName("")
        setEmail("")
       

    }
   
  return (
    <div>
        <h1>Please login</h1>
    <Form onSubmit={Submit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default Login