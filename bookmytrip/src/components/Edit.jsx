import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';

function Edit() {
    const [id,setId]= useState('')
    const [image,setImage]=useState('')
    const [name,setName]=useState('')
    const[place ,setLocation]=useState('')
    const[rate,setRate]=useState('')
    const[description,setDescrption]=useState('')

    const params = useParams()
  let loc = useNavigate()
  const fetchHotel = async () => {
    const result = await axios.get('http://localhost:8080/getHotel/' + params.id)
    console.log(result.data.hotel);
    setId(result.data.hotel.id)
    setImage(result.data.hotel.image)
    setName(result.data.hotel.name)
    setLocation(result.data.hotel.place)
    setRate(result.data.hotel.rate)
    setDescrption(result.data.hotel.description)
  }
  const handleUpdate = async (e) => {
    e.preventDefault()

    const body = {
      id, image,name,place,rate,description
    }
    const result = await axios.post('http://localhost:8080/editHotel', body)
    alert(result.data.message)
    loc('/home')

    // alert(result.data.message)
    // console.log(result);
  }


  useEffect(() => {
    fetchHotel()
  }, [])

  return (
    <div>
        <h1 className='text-center mt-3 fw-bold'>Edit hotel data</h1>
            <Form className='p-5 w-50 container'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Hotel Image name</Form.Label>
                    <Form.Control value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name of hotel</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Location of hotel</Form.Label>
                    <Form.Control value={place} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rate of Hotel</Form.Label>
                    <Form.Control value={rate} onChange={(e) => setRate(e.target.value)} type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e) => setDescrption(e.target.value)}  type="text" placeholder="" />
                </Form.Group>
                <Button variant="primary" className='text-white fw-bold border-5' onClick={(e) => handleUpdate(e)}>Update</Button>{' '}
                <Link to={'/home'}>
                    <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}

                </Link>

            </Form>
    </div>
  )
}

export default Edit