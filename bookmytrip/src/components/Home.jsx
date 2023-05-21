import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

function Home() {
    const [allHotel,setHotel]=useState([])
    const fetchData=async ()=>{
      const result = await axios.get('http://localhost:8080/getAllData')
      setHotel(result.data.hotels);
    }
   
    const handleDelete=async (id)=>{
        const result =await  axios.delete('http://localhost:8080/deleteUser/'+id)
          console.log(result);
          alert(result.data.message)
          fetchData()
      }
  
    useEffect(()=>{
        fetchData()
      },[])
    return (
        <div>
                <div className='text-center bg-primary'>
                <div>
                <Link to={'/add'}>
                    <Button className='mt-5 ms-5' variant="warning"><i class="fa-solid fa-plus"></i> Add data</Button>{' '}
                </Link>
              

                        <Table className='ms-5 mt-1 pe-5 ' hover>
                        <thead>
                            <tr>
                                <th>Num</th>
                                <th>Name of hotel</th>
                                <th>Image</th>
                                <th>location</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                    allHotel?.map((item,index)=>(
                                    
                                    <tr>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} width={300} height={150} alt="" /></td>
                                    <td>{item.place}</td>
                                    <td>
                                        <Link to={'/view/'+item.id}>
                                        <Button variant="success" ><i class="fa-regular fa-eye" ></i> View more</Button>{' '}
        
                                        </Link>
                                        <Button variant="primary" onClick={()=>handleDelete(item.id)} className='ms-1'  ><i class="fa-solid fa-trash"></i> Delete</Button>{' '}


            
                                    </td>
                                </tr>
                                ))
                            }
                           
        
                        </tbody>
                    </Table>
        

                
                </div>
                </div>
            </div>
        

           
        

    )
}

export default Home