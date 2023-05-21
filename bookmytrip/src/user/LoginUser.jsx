import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import React ,{useState} from 'react'

function LoginUser() {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  let location = useNavigate()

  const logins = async (e) => {
    e.preventDefault()
    // console.log((uuid().slice(0,3)));
    const body = {email,password}
    const result = await axios.post('http://localhost:8080/loginuser', body)
    //    console.log(result);
    alert(result.data.message)
    location('/homeuser')

  }
  return (
    <div>
      <div className='container w-50 border bg-light border-2 rounded-4 mt-5'>
        <Form>
          <h2 className='text-warning text-center fw-bold'>Login</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />
          </Form.Group>
          <div  className='mb-3 text-center' >
          <Button variant="warning" onClick={(e)=>logins(e)} type="submit">
            Submit
          </Button>
          <Button variant="secondary" href="/" className='ms-1' type="submit">
            cancel
          </Button>
          </div>
          <div className='mt-1 mb-2 text-center'>
          <a href="/userregister" className='a_link fw-bold'>If you are a new user click here</a>

        </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginUser