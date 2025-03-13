import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'

export default function Result() {
  
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Daily Tuition</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points</span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points</span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points</span>
          <span className='bold'></span>
        </div>

        return(
        <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
        </div>

        <div className="start">
          <Link className='btn' to={'/'} onClick={}> Restart</Link>
      </div>
    </div>
  )
}