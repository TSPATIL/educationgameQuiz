import React, { useState } from 'react'
import answerContext from './answerContext'

export default function AnswerState(props) {
    const [answer, setAnswer] = useState([]);
    const getAnswer = async ()=>{
        const response = await fetch('http://127.0.0.1:5000/api/answer/getAnsweruser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json)
        setAnswer(json.answers);
    }
    const getAnswerQuiz = async ()=>{
        const response = await fetch('http://127.0.0.1:5000/api/answer/getanswerquiz', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setAnswer(json.answers);
    }
  return (
    <answerContext.Provider value={{getAnswer, answer, setAnswer, getAnswerQuiz}}>
        {props.children}
    </answerContext.Provider>
  )
}
