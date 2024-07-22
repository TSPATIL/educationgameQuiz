import React, { useState } from 'react'
import feedbackContext from './feedbackContext'

export default function FeedbackState(props) {
    const [feedback, setFeedBack] = useState([]);
    const getFeedBack = async ()=>{
        const response = await fetch('http://127.0.0.1:5000/api/feedback/getfeedback', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json)
        setFeedBack(json.feedback);
    }
  return (
    <feedbackContext.Provider value={{getFeedBack, feedback}}>
        {props.children}
    </feedbackContext.Provider>
  )
}
