import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Link,useNavigate} from 'react-router-dom' 


function View() {
  const [hotel, setHotel] = useState({})
  const params = useParams()
  let location = useNavigate()

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8080/getHotel/' + params.id)
    setHotel(result.data.hotel)
  }

  
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div className="row mt-5">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h1 className='text-center'>View</h1>
        <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={hotel.image} />
            <Card.Body>
              <Card.Title>{hotel.name}</Card.Title>
              <Card.Text>
                {hotel.descrption}
              </Card.Text>
              <Card.Text>
               <b>Price:- </b> {hotel.rate}
              </Card.Text>
              <Link to={`/edit/${hotel.id}`}>
              <Button variant="primary">Edit</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}

export default View