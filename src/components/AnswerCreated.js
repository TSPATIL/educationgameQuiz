import React from 'react'

export default function AnswerCreated(props) {
  const {ans} = props;
  return (
    <div className='col-md-3 my-3'>
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Subject: {ans.subject}</h5>
        <p className="card-text">Quizcode: {ans.quizcode}</p>
        <p className="card-text">Date: {ans.date}</p>
        <a href="#" className="btn btn-primary">View Result</a>
      </div>
    </div>
  </div>
  )
}
