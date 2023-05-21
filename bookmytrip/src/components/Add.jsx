import React, { useState ,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import uuid from 'react-uuid'

function Add() {
    const [id,setId]= useState('')
    const [image,setImage]=useState('')
    const [name,setName]=useState('')
    const[place ,setLocation]=useState('')
    const[rate,setRate]=useState('')
    const[description,setDescrption]=useState('')

    useEffect(()=>{
        setId(uuid().slice(0,3))
      },[])
      let loc = useNavigate()
      const addHotel=async (e)=>{
        e.preventDefault()
        setId(uuid().slice(0,3))
        const body={
            id,image,name,place,rate,description
        }
       const result=await axios.post('http://localhost:8080/addHotel',body)
       alert(result.data.message)
       loc('/home')   
      }


    return (
        <div>
            <h1 className='text-center mt-3 fw-bold'>Add hotel data</h1>
            <Form className='p-5 w-50 container'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Hotel Image name</Form.Label>
                    <Form.Control onChange={(e)=>setImage(e.target.value)}  type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name of hotel</Form.Label>
                    <Form.Control onChange={(e)=>setName(e.target.value)}  type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Location of hotel</Form.Label>
                    <Form.Control onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rate of Hotel</Form.Label>
                    <Form.Control onChange={(e)=>setRate(e.target.value)}  type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e)=>setDescrption(e.target.value)} type="text" placeholder="" />
                </Form.Group>
                <Button variant="primary" onClick={(e)=>addHotel(e)} className='text-white fw-bold border-5'>Add</Button>{' '}
                <Link to={'/home'}>
                    <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}

                </Link>

            </Form>
        </div>
    )
}

export default Add 