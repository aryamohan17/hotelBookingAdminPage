import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";



function Admin() {
  // const onSubmit = (data) => console.log(data);
  // const { register, formState: { errors }, handleSubmit, } = useForm();

  const [Email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  let location = useNavigate()

  const logins = async (e) => {
    e.preventDefault()
    // console.log((uuid().slice(0,3)));
    const body = {Email,password}
    const result = await axios.post('http://localhost:8080/login', body)
    //    console.log(result);
    alert(result.data.message)
    location('/home')

  }
  
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/LsRVS6JB/hotellogo.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Book my Hotel
          </Navbar.Brand>
          <Nav>
            {/* <Nav.Link href="register"><i class="fa-solid fa-user"></i> Login</Nav.Link> */}
            <Nav.Link eventKey={2} >
              <h3></h3>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container text-center w-50 border border-2 mt-5'>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
          <h2 className='text-primary fw-bold'>Login</h2>
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder=""
            // {...register("Email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
          />
          {/* <p className="text-danger">
            {errors.Email?.type === "required" && "email required"}
            {errors.Email?.type === "pattern" && "email is wrong format"}

          </p> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder=""
          // {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/  })}

          />
           {/* <p className="text-danger">
                    {errors.password?.type === "required" && "password required"}
                    {errors.password?.type === "pattern" && "password is wrong format"}
                  </p> */}
        </Form.Group>



        <Button variant="primary" className='text-white fw-bold border-5'  onClick={(e) => logins(e)}>Login</Button>{' '}
        <Link to={'/'}>
          <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}

        </Link>
        <div className='mt-1'>
          <a href="/register" className='a_link fw-bold'>If you are a new admin click here</a>

        </div>

      </div>




    </div>
  )
}

export default Admin