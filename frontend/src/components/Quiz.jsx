import React from 'react'
import Questions from '../components/Questions'

export default function Quiz() {

  /** next button eventhandler */
function onNext(){
    console.log('On next click')
}

/** previous button eventhandler */
function onPrevious(){
  console.log('On next click')
}


  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display question */}
      <Questions></Questions>
      <div className='grid'>
        <button className='btn prev' onClick={onPrevious}>Previous</button>
        <button className='btn next' onClick={onNext}>Next</button>

      </div>
    </div>
  )
}