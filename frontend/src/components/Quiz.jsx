import React from 'react'

export default function Quiz() {

function onNext(){
    console.log('On next click')
}

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display question */}
      <div className='grid'>
        <button className='btn prev'>Previous</button>
        <button className='btn next' onClick={}>Next</button>

      </div>
    </div>
  )
}