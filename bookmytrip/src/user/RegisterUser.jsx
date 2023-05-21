import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import React ,{useState} from 'react'

function RegisterUser() {
    const[email,setEmail]=useState('')

    const [username,SetUsername]=useState('')
         const[password,setPassword]=useState('')
      
        let location = useNavigate()

        const registers=async (e)=>{
            e.preventDefault()
            // console.log((uuid().slice(0,3)));
            const body={
                email,username,password
            }
           const result=await axios.post('http://localhost:8080/registerUser',body)
           alert(result.data.message)
           location('/admin')
          
          }
    return (
        <div>
            <div className='container w-50 border bg-light border-2 rounded-4 mt-5'>
                <Form>
                <h2 className='text-warning text-center fw-bold'>Register</h2>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' onChange={(e)=>SetUsername(e.target.value)} rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' onChange={(e)=>setPassword(e.target.value)} rows={3} />
                    </Form.Group>
                </Form>
                <div className='mb-3 text-center' >
                    <Button variant="warning"  onClick={(e)=>registers(e)} type="submit">
                        Submit
                    </Button>
                    <Button variant="secondary" href="/" className='ms-1' type="submit">
                        cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser