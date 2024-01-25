import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const useLocalStorage = () => {
    const[local,setLocal]=useState([])
    const handleLocal=useParams('')

  return [local,handleLocal]
}

export default useLocalStorage