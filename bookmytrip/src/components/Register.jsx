import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import React ,{useState} from 'react'
import { useForm } from "react-hook-form";

function Register() {
         const [username,SetUsername]=useState('')
         const[password,setPassword]=useState('')
        const[Email,setEmail]=useState('')
      
        let location = useNavigate()

        const registers=async (e)=>{
            e.preventDefault()
            // console.log((uuid().slice(0,3)));
            const body={
              username,password,Email
            }
           const result=await axios.post('http://localhost:8080/register',body)
        //    console.log(result);
           alert(result.data.message)
           location('/admin')
            // console.log(body);
            // console.log(id);
            // console.log(uname);
            // console.log(age);
            // console.log(desig);
            // console.log(salary);
          }
  return (
    <div>
<div className='container text-center w-50 border border-2 mt-5'>

<Form className=' container'> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h3 className='text-primary fw-bold'>Register</h3>
        <Form.Label>username</Form.Label>
        <Form.Control onChange={(e)=>SetUsername(e.target.value)} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="" />
      </Form.Group> 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="" />
      </Form.Group>
     
      <Button   variant="primary" onClick={(e)=>registers(e)} className='text-white fw-bold border-5'>Register</Button>{' '}
     <Link to={'/'}>
     <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}
     
     </Link> 
     
     </Form>
    </div>
    </div>
  )
}

export default Register