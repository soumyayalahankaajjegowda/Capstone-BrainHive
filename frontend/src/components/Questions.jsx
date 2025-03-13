import React, { useState, useEffect} from 'react'


export default function Questions() {

  const [checked, setChecked] = useState(undefined)

  useEffect(() => {
      console.log(question)
  })

  function onSelect() {
      console.log('ratio button change')
  }

    return (
      <div className='questions'>
        <h2 className='text-light'>Simple Question 1</h2>

        <ul key={question.id}>
          {
            question.options.map((q, i) => (
              <li key={i}>
              <input
                 type="radio"
                 value={false}
                 name="options"
                 id={'q${i}-option'}
                 onChange={onselect()}
                 />

                 <label className='text-primary' htmlFor="q1-option">option</label>
                 <div className='check'></div>
          </li>
            ))
          } 
        </ul>
      </div>
    )

}