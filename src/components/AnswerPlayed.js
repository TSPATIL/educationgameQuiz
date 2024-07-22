import React from 'react'

export default function AnswerPlayed({ ans }) {

  const moneyList = [
    { id: 1, amount: "1,000" },
    { id: 2, amount: "2,000" },
    { id: 3, amount: "3,000" },
    { id: 4, amount: "5,000" },
    { id: 5, amount: "10,000" },
    { id: 6, amount: "20,000" },
    { id: 7, amount: "40,000" },
    { id: 8, amount: "80,000" },
    { id: 9, amount: "1,60,000" },
    { id: 10, amount: "3,20,000" },
    { id: 11, amount: "6,40,000" },
    { id: 12, amount: "12,50,000" },
    { id: 13, amount: "25,00,000" },
    { id: 14, amount: "50,00,000" },
    { id: 15, amount: "1 Crore" },
    { id: 16, amount: "7 Crore" }
  ]

  return (
    <div className='col-md-3 my-3 '>
      <div className="card" style={{ width: "17rem", marginRight: '5px' }}>
        <div className="card-body">
          <h5 className="card-title">Subject: {ans.subject}</h5>
          <p className="card-text">Quizcode: {ans.quizcode}</p>
          <p className="card-text">Date: {ans.date}</p>
          {/* <p className="card-text">Marks: {moneyList[Math.floor(Math.random() * (16 - 1 + 1)) + 1].amount}</p> */}
          <a href="#" className="btn btn-primary">View Result</a>
        </div>
      </div>
    </div>
  )
}
