import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'

function HomeUser() {
  const [allHotel, setHotel] = useState([])
  const fetchData = async () => {
    const result = await axios.get('http://localhost:8080/getAllData')
    setHotel(result.data.hotels);
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {
        allHotel?.map((item, index) => (
          <div className="row mt-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <h1 className='text-center'>View</h1>
              <Card style={{ width: '36rem' }}>
                <Card.Img variant="top" src={item.} />
                <Card.Body>
                  <Card.Title>hotel</Card.Title>
                  <Card.Text>
                    ttttttyyyyyyyyyyyyyyyyyyyyyyyyyyhhhhhhhhhzzzzzzzzzzzzzxxxxxxxxxxxxxxxxxxx
                  </Card.Text>
                  <Card.Text>
                    <b>Price:- </b> 789
                  </Card.Text>
                  <Link>
                    <Button variant="primary">Add to cart</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4"></div>
          </div>
        ))
      }
    </div>
  )
}

export default HomeUser