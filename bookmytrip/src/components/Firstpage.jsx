import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

function Firstpage() {
    return (
        <div className='bg-primary h-100'>
            <div >
                <Row>
                    <Col className='p-5' lg={4} md={5}></Col>
                    <Col className='p-5' lg={4} md={5}>
                        <Link to={'/admin'}>
                        <Button variant="warning">Admin</Button>{' '}
                        </Link>
                        <Link to={'/userlogin'}>
                        <Button variant="success">User</Button>{' '}

                        </Link>
                    </Col>
                    <Col className='p-5' lg={4} md={5}></Col>

                </Row>


            </div>
        </div>
    )
}

export default Firstpage