import React, { useEffect, useState } from 'react'
import Tables from './Table'
import axios from 'axios'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    
    const [data, setData] = useState([])

    useEffect(() => {  
         axios.get('http://localhost:3000/users')
         .then((res)=>setData(res.data))
         .catch((err)=>console.log(err))

    },[])

  return (
    <div >
        <Box sx={{display:"inline-block"}}>
        <h1>Welcome to my Home page</h1>

<Button variant='contained' onClick={()=>navigate("/createuser")}  sx={{padding:2}}>Createuser</Button>
        </Box>

        <Tables data={data}/>
    </div>
  )
}

export default Home