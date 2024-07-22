import React from 'react'

export default function FeedbacksItem(props) {
    const {feed} = props;
    return (
      <div className='col-md-3 my-3'>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Subject: {feed.rating}</h5>
          <p className="card-text">Date: {feed.quizcode}</p>
          <p className="card-text">Comment: {feed.comment}</p>
        </div>
      </div>
    </div>
    )
}
