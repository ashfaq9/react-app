import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function View(studentdetail) {

    const params=useParams()
    const [value ,setValue]=useState([])
    console.log(params.id)
    
  return (
    <div>view  </div>
  )
}
