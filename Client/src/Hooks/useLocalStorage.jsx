import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const useLocalStorage = (key) => {
    const[local,setLocal]=useState(useLocalStorage.getItem(key)? JSON.parse(localStorage.getItem(key)):[]);

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(local))
    },[local])
        
    
    const handleLocal=useParams('')

  return [local,handleLocal]
}

export default useLocalStorage