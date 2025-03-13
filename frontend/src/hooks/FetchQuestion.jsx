import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import data from "../database/Data";

/** redux actions */
import * as Action from '../redux/Question_reducer'

/**fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const[getData, setGetData] = useState({isLoading : false, apiData : [], serverError: null});

  useEffect(() => {
    setGetData(previous => ({...previous, isLoading : true}));

    /** async function fetch backend data */
    (async () => {
      try {
        let question = await data;

        if(question.length > 0) {
           setGetData(prev => ({...previous, isLoading : false}));
           setGetData(prev => ({...previous, apiData : question}));

                      /** dispatch an action */
           dispatch(Action.startExamAction()) 
        } else{
            throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData(previous => ({...previous, isLoading : false}));
        setGetData(previous => ({...previous, serverError : error}));
      }
      })();
    }, [dispatch]);

    return [getData, setGetData];

    }