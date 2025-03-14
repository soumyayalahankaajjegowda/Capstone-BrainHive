import React, { useState, useEffect} from 'react'
import data from '../database/Data'
import { useQuiz } from '../context/QuizContext';
/**custom hook */
import { useFetchQuestion } from '../hooks/FetchQuestion';



export default function Questions({ onChecked }) {

  const [checked, setChecked] = useState(undefined)
  const { questions, result, updateResult } = useQuiz();
  const { trace, queue } = questions;
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()
 

  useEffect(() => {
      //console.log(question)
      updateResult(trace, checked);
    }, [checked, trace, updateResult]);

  function onSelect(i) {
     // console.log('ratio button change')
     onChecked(i);
     setChecked(i);
  }

  if (isLoading) return <h3 className='text-light'>isLoading</h3>;
  if (serverError) return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>;

    return (
      <div className='questions'>
        <h2 className='text-light'>{queue[trace]?.question}</h2>
        <ul key={queue[trace]?.id}>
          
            {queue[trace]?.options.map((q, i) => (
              <li key={i}>
              <input
                 type="radio"
                 value={false}
                 name="options"
                 id={'q${i}-option'}
                 onChange={() => onselect(i)}
                 />

                 <label className='text-primary' htmlFor={'q${i}-option'}>{q}</label>
                 <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
          </li>
            ))
          } 
        </ul>
      </div>
    );
}