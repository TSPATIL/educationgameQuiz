import React, { useContext, useEffect, useRef, useState } from 'react'
import video from '../media/kbc.mp4'
import askExpert from '../media/ask_the_expert.png'
import audiencePoll from '../media/audience_poll.png'
import fiftyfifty from '../media/fifty_fifty.png'
import flipQuestion from '../media/flip_the_question.png'
import '../styles/Quiz.css'
import Timer from './Timer'
import Question from './Question'
import { useNavigate } from 'react-router-dom'
import questionContext from '../contexts/Question/questionContext'

export default function Quiz() {
  const refFeedback = useRef(null);
  const [feedback, setFeedback] = useState({rating: 1, comment: ''});
  const [startTimer, setStartTimer] = useState(true);
  const[Time, setTime] = useState(0);
  const context = useContext(questionContext);
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('kbc').style.display = 'none';
      document.getElementById('kbc-div').style.display = 'none';
      document.getElementById('background').style.display = 'flex'
      setStartTimer(false)
    }, 26000);
  }, [])

  //const [question, setQuestion] = useState({id: 0, language: '', topic: '', difficulty: '', question: '', A: '', B: '', C: '', D: '', answer: '', explanation: '', ammount: 0});
  const [qnumber, setQnumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);
  const { questionList, quizCode, subjectName, userId, submitAnswer, handleFiftyFifty } = context;
  const [qList, setQList] = useState([]);

  const handleOnFeedbackClose = ()=>{
    refFeedback.current.click();
    navigate('/');
  }

  const handleOnFeedbackSave = async ()=>{
    refFeedback.current.click();
    console.log(feedback);
    const response = await fetch('http://127.0.0.1:5000/api/feedback/createfeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ rating: feedback.rating, comment: feedback.comment, quizcode: quizCode })
    })
    const json = await response.json();
    if(json.success){
      console.log(json.savedFeedback);
      refFeedback.current.click();
      navigate('/');
    }
    else{
      alert(json.error);
      navigate('/');
    }
    
  }

  const onHandleFeedbackChange = (e)=>{
    setFeedback({...feedback, [e.target.name]: e.target.value})
    console.log(e.target.value);
  }

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
  ].reverse()

  const navigate = useNavigate();
  const gameOver = () => {
    console.log({qList, subjectName, quizCode, userId})
    setTimeout(() => {
      submitAnswer(qList, subjectName, quizCode, userId);
      //navigate('/');
    }, 3000);
    refFeedback.current.click();
  }

  return (
    <>
      <div id='kbc-div'>
        <video id='kbc' autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id='background' className="background">
        <div className='bg-img'>
          {
            stop ? (
              qnumber === questionList.length ? <div className='winner'><span className='trophy'>&#127942;</span> Congratulations! You are the real Crorepati <span className='trophy'>&#127942;</span></div> :
                <div className='gameover'><span className='trophy'>&#127942;</span> You earned : &#8377; {earned} <span className='trophy'>&#127942;</span></div>
            )
              : (
                startTimer ? <div></div> :
                  <div>
                    <Timer setStop={setStop} qnumber={qnumber} setTime={setTime} />
                    <hr />
                    <Question data={questionList} qnumber={qnumber} setQnumber={setQnumber} setStop={setStop} stop={stop} gameOver={gameOver} setEarned={setEarned} Time={Time} subjectName={subjectName} quizCode={quizCode} userId={userId} submitAnswer={submitAnswer} qList={qList} setQList={setQList} />
                  </div>
              )
          }
        </div>
        <div className='container' id='div-money'>
          <div className="lifelines">
            <div className="lifeline">
              <img src={audiencePoll} alt="audience poll" />
            </div>
            <div className="lifeline" onClick={handleFiftyFifty}>
              <img src={fiftyfifty} alt="50-50" />
            </div>
            <div className="lifeline">
              <img src={flipQuestion} alt="flip the question" />
            </div>
            <div className="lifeline">
              <img src={askExpert} alt="ask the expert" />
            </div>
          </div>
          <div className="money">
            <ul>
              {
                moneyList.map((money) => {
                  return (
                    <li key={money.id} className={money.id === qnumber ? `active` : ``}>
                      <span className='span1'>{money.id}</span>
                      <span className='span-mid'>	&lt;&gt;</span>
                      <span className='span2'>{money.amount}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

       {/* <!-- Button trigger modal --> */}
       <button type="button" ref={refFeedback} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleOnFeedbackClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" name='rating' value={feedback.rating} onChange={onHandleFeedbackChange}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="comment" value={feedback.comment} onChange={onHandleFeedbackChange}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleOnFeedbackSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}