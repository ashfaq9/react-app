import React from 'react'
import { Link } from 'react-router-dom'

export default function anchor() {
  return (
    <div>
        <a href='classes.jsx'>click here</a>
        <Link to="classes">classes</Link>
        <br/>
        <Link to="form">hlooo</Link>
    </div>
  )
}
