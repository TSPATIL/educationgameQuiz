import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  Link, useNavigate
} from 'react-router-dom'
// import logo from '../media/iQuiz2.svg'
import questionContext from '../contexts/Question/questionContext';
// import askExpert from '../media/ask_the_expert.png'
// import audiencePoll from '../media/audience_poll.png'
// import fiftyfifty from '../media/fifty_fifty.png'
// import flipQuestion from '../media/flip_the_question.png'
import bgImage from '../media/kbc_background.png'

export default function Home() {
  const ref = useRef(null);
  const context = useContext(questionContext);
  const { getQuiz } = context;
  const [joinQuiz, setJoinQuiz] = useState(0);
  const [subject, setSubject] = useState('');
  const [quizcode, setQuizCode] = useState(0)
  const [btnRadio, setBtnRadio] = useState(1);

  var [question, setQuestion] = useState({ id: 1, topic: '', difficulty: '', question: '', A: '', B: '', C: '', D: '', answer: '', explanation: '', amount: 1000 });
  const [questionList, setQuestionList] = useState([]);
  const handleModal = () => {
    ref.current.click();
  }
  const handleOnRadioChange = (e) => {
    if (document.getElementById('btnradio1').checked === true) {
      setBtnRadio(1)
    }
    if (document.getElementById('btnradio2').checked === true) {
      setBtnRadio(2)
    }
    if (document.getElementById('btnradio3').checked === true) {
      setBtnRadio(3)
    }
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
  ];

  const [topicSelect, setTopicSelect] = useState(false);

  const navigate = useNavigate();
  const handleOnRadioClick1 = () => {
    if(!topicSelect){
      alert('Select Topic');
    }
    else {
    ref.current.click();
    let quizcode = 123456
    getQuiz(quizcode);
    navigate('/quiz');
    }
  }
  const handleOnRadioClick2 = () => {
    if(joinQuiz === '' || joinQuiz === 0){
      alert('Enter join code');
    }
    else {
    ref.current.click();
    getQuiz(joinQuiz);
    navigate('/quiz');
    }
  }
  const handleOnRadioClick3 = async () => {
    if (question.id === 17) {
      ref.current.click();
      // console.log(questionList);
      // console.log(quizcode);
      const response = await fetch('http://127.0.0.1:5000/api/question/createquiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ subject, questionList, quizcode })
      })
      const json = await response.json();
      if (json.success) {
        navigate('/');
        navigator.clipboard.writeText(quizcode);
        alert('Quiz saved and quizcode copied to clipboard');
        setQuestionList([]);
        setQuestion({ id: 1, topic: '', difficulty: '', question: '', A: '', B: '', C: '', D: '', answer: '', explanation: '', amount: 1000 })
        setSubject('');
      }
      else {
        navigate('/');
        alert(json.error);
      }
    }
    else{
      alert('Fill all questions')
    }
  }
  const handleOnSubjectClick = (e) => {
    setSubject(e.target.value)
  }
  const handleOnNextClick = () => {
    if (question.topic === '' || question.difficulty === '' || question.question === '' || question.A === '' || question.B === '' || question.C === '' || question.D === '' || question.answer === '' || question.explanation === '') {
      alert('Fill all fields to set question');
    }
    else {
      setQuestionList([...questionList, question]);
      if (question.id < moneyList.length) {
        setQuestion({ id: moneyList[question.id].id, amount: moneyList[question.id].amount, topic: '', difficulty: '', question: '', A: '', B: '', C: '', D: '', answer: '', explanation: '' })
        //console.log(question)
      }
      else if (question.id === moneyList.length) {
        setQuestion({ id: 17 })
        setQuizCode(Math.floor(Math.pow(10, 6 - 1) + Math.random() * (Math.pow(10, 6) - Math.pow(10, 6 - 1) - 1)));
      }
      else {
        ;
      }
    }
  }

  const handleJoinQuizChange = (e) => {
    setJoinQuiz(e.target.value);
  }

  const handleOnChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    document.getElementById('btnradio1').checked = true;
  }, [])

  const handleOnSelectChange = ()=>{
    setTopicSelect(!topicSelect);
  }

  return (
    <>
      {/* <div className="d-flex justify-between align-items-center" style={{position: 'absolute', top: '100px', left: '100px', gap: '10px'}}>
        <img src={askExpert} alt='' style={{height: '100px', width: '100px', padding: '0px 3px'}} />
        <img src={audiencePoll} alt='' style={{height: '125px', width: '100px', padding: '0px 3px'}} />
      </div>
      <div className="d-flex justify-between align-items-center" style={{position: 'absolute', top: '100px', right: '100px', gap: '10px'}}>
        <img src={fiftyfifty} alt='' style={{height: '100px', width: '100px', padding: '0px 3px'}} />
        <img src={flipQuestion} alt='' style={{height: '100px', width: '100px', padding: '0px 3px'}} />
      </div> */}
      <div className='' style={{padding: '70px', borderRadius: '70px', position: 'absolute', backgroundColor: '#061161', top: '350px', left: '770px', zIndex: '1', border: '6px solid gold'}}></div>
      <hr style={{position: 'absolute', width: '100%', top: '490px', backgroundColor: 'gold', height: '8px', opacity: '1'}}/>
      <hr style={{position: 'absolute', width: '100%', top: '635px', backgroundColor: 'gold', height: '4px', opacity: '1'}}/>
      <div>
        <div className="px-4 py-5 text-center" style={{backgroundImage: `url(${bgImage})`, height: '737px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className='' style={{margin: '250px auto'}}>
          {/* <img className="d-block mx-auto mb-4" src={logo} alt="" width="100" height="100" /> */}
          <h1 className="display-5 fw-bold text-light pl-5" style={{zIndex: '5', position: 'relative', fontSize: '32px'}}>iQuiz</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-light" style={{position: 'relative', border: '6px solid gold', padding: '30px 50px', borderTopLeftRadius: '70px', borderBottomLeftRadius: '70px', borderTopRightRadius: '70px', borderBottomRightRadius: '70px', backgroundColor: '#061161', textAlign: 'center', fontWeight: '700', zIndex: '5'}}>Welcome to iQuiz, your ultimate destination for an exhilarating game show experience! Step into the virtual hot seat and test your knowledge just like on Kaun Banega Crorepati.</p>
            <div className="d-grid d-sm-flex justify-content-sm-center">
              <button onClick={handleModal} id='homeLink1' type="button" className="btn btn-lg text-center" style={{ position:'relative', backgroundColor: '#061161', color: 'white', padding: '20px', border: '4px solid gold', width: '400px', borderRadius: '40px', zIndex: '3'}} onmouseover="this.style.background='red'"  onmouseout="this.style.background='#061161'">Let's Play! <i className="fa-solid fa-rocket"></i></button>
              <Link role='button' to='/about' id='homeLink2' type="button" className="btn btn-lg text-center" style={{ position: 'relative', backgroundColor: '#061161', color: 'white', padding: '20px', border: '4px solid gold', width: '400px', borderRadius: '40px', zIndex: '3'}} >About us</Link>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* // <!-- Button trigger modal --> */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* // <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Game Settings</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="btn-group mb-3 container" role="group" aria-label="Basic radio toggle button group" style={{backGroundColor: ''}}>
                <input type="radio" className="btn-check btn-lg" name="btnradio" id="btnradio1" onChange={handleOnRadioChange} autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Normal Play</label>

                <input type="radio" className="btn-check btn-lg" name="btnradio" id="btnradio2" onChange={handleOnRadioChange} autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Join with code</label>

                <input type="radio" className="btn-check btn-lg" name="btnradio" id="btnradio3" onChange={handleOnRadioChange} autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Create Quiz</label>
              </div>
              {
                btnRadio === 1 ?
                  <div className='container'>
                    <div className="d-flex row my-2 container align-items-center">
                      <span className='col-4 fs-5'>Please select the topic: </span>
                      <select className="form-select col" aria-label="Default select example" onChange={handleOnSelectChange}>
                        <option>Select Topic</option>
                        <option value="C">C Programming</option>
                        {/* <option value="Java">Java Programming</option>
                        <option value="Python">Python Programming</option> */}
                      </select>
                    </div>
                    <p className='fs-5 mx-2'>
                      <strong>Note: Be sure before starting the test. Do good preparation so that you can become crorepati. All the best!</strong>
                    </p>
                  </div>
                  :
                  <div></div>
              }
              {
                btnRadio === 2 ?
                  <div className='container'>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput2" name='joinQuiz' value={joinQuiz} onChange={handleJoinQuizChange} placeholder="Game Name" />
                      <label htmlFor="floatingInput2">Enter Quiz Code</label>
                    </div>
                  </div>
                  :
                  <div></div>
              }
              {
                btnRadio === 3 ?
                  <div className='container'>
                    <div className="d-flex">
                      <div className="form-floating mb-3 col-12">
                        <input type="text" className="form-control" id="floatingInput" name="subject" value={subject} onChange={handleOnSubjectClick} placeholder="Game Name" />
                        <label className='mx-2 mb-2' htmlFor="floatingInput">Subject</label>
                      </div>
                      {/* <button type="button" className="btn btn-primary btn-lg mx-2 px-5 py-2" onClick={handleOnSubjectClick} style={{ backgroundColor: '#6610f2' }}>Submit</button> */}
                    </div>
                    {question.id <= moneyList.length ?
                      <>
                        <div className="container fs-4 mt-1"><strong>Question No {question.id}: </strong></div>
                        <hr className="my-4" />
                        <div className='row g-7'>
                          <div className="form-floating mb-3 col-12">
                            <input type="text" className="form-control" id="floatingInput1" name="question" value={question.question} placeholder="Game Name" onChange={handleOnChange} required />
                            <label className='mx-2 mb-2' htmlFor="floatingInput1">Enter Question</label>
                          </div>
                          <div className="form-floating mb-3 col-3">
                            <input type="text" className="form-control" id="floatingInput2" name="A" value={question.A} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput2" className='mx-2 mb-2'>Option A</label>
                          </div>
                          <div className="form-floating mb-3 col-3">
                            <input type="text" className="form-control" id="floatingInput3" name="B" value={question.B} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput3" className='mx-2 mb-2'>Option B</label>
                          </div>
                          <div className="form-floating mb-3 col-3">
                            <input type="text" className="form-control" id="floatingInput4" name="C" value={question.C} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput4" className='mx-2 mb-2'>Option C</label>
                          </div>
                          <div className="form-floating mb-3 col-3">
                            <input type="text" className="form-control" id="floatingInput5" name="D" value={question.D} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput5" className='mx-2 mb-2'>Option D</label>
                          </div>
                          <div className="form-floating mb-3 col-6">
                            <input type="text" className="form-control" id="floatingInput6" name="answer" value={question.answer} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput6" className='mx-2 mb-2'>Answer</label>
                          </div>
                          <div className="form-floating mb-3 col-6">
                            <input type="text" className="form-control" id="floatingInput7" name="amount" value={question.amount === 0 ? '' : question.amount} placeholder="Game Name" onChange={handleOnChange} disabled />
                            <label htmlFor="floatingInput7" className='mx-2 mb-2'>Amount</label>
                          </div>
                          <div className="form-floating mb-3 col-6">
                            <input type="text" className="form-control" id="floatingInput8" name="topic" value={question.topic} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput8" className='mx-2 mb-2'>Topic</label>
                          </div>
                          <div className="form-floating mb-3 col-6">
                            <input type="text" className="form-control" id="floatingInput9" name="difficulty" value={question.difficulty} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput9" className='mx-2 mb-2'>Difficult</label>
                          </div>
                          <div className="form-floating mb-3 col-12">
                            <input type="text" className="form-control" id="floatingInput10" name="explanation" value={question.explanation} placeholder="Game Name" onChange={handleOnChange} required />
                            <label htmlFor="floatingInput10" className='mx-2 mb-2'>Explanation</label>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <button type="button" className="btn btn-primary btn-lg mx-2 px-5 py-2" onClick={handleOnNextClick} style={{ backgroundColor: '#6610f2' }}>Next</button>
                      </>
                      :
                      <div>
                        <div className="form-floating mb-3 col-12">
                          <input type="text" className="form-control" id="floatingInput" name="quizcode" value={quizcode} placeholder="Game Name" disabled />
                          <label htmlFor="floatingInput" className='mx-2 mb-2'>Quiz code</label>
                        </div>
                      </div>
                    }
                  </div>
                  :
                  <div></div>
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-lg" data-bs-dismiss="modal">Close</button>
              {
                btnRadio === 1 ? <button type="button" className="btn btn-primary btn-lg" onClick={handleOnRadioClick1} style={{ backgroundColor: '#6610f2' }}>Start</button> : null
              }
              {
                btnRadio === 2 ? <button type="button" className="btn btn-primary btn-lg" onClick={handleOnRadioClick2} style={{ backgroundColor: '#6610f2' }}>Start</button> : null
              }
              {
                btnRadio === 3 ? <button type="button" className={`btn btn-primary btn-lg`} onClick={handleOnRadioClick3} style={{ backgroundColor: '#6610f2' }}>Copy and Save</button> : null
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
