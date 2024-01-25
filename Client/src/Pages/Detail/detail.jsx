import React from 'react'
import { useState } from 'react'


const Detail = () => {
    const [detail,setDetail]=useState([])
    const res=axios.get(`http://localhost:3000/${id}`)
   
  return (
    <div>
        
    </div>
  )
}

export default Detail