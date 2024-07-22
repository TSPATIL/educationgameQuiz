import React, { useContext, useEffect, useState } from 'react'
import audio from '../media/tictoc.mp3'
import questionContext from '../contexts/Question/questionContext'

export default function Question({ data, qnumber, setQnumber, setStop, gameOver, setEarned, Time, subjectName, quizCode, userId, qList, setQList }) {
  const [question, setQuestion] = useState({ id: 1, language: '', topic: '', difficulty: '', question: '', A: '', B: '', C: '', D: '', answer: '', explanation: '', amount: 0, time: 0 });
  const context = useContext(questionContext);
  const audioFunc = document.getElementById('audio');
  const {setCurrentQues, fiftyEmpty} = context;

  useEffect(() => {
    console.log(qList, subjectName, quizCode, userId)
    setQuestion(data[qnumber - 1])
    setCurrentQues(data[qnumber - 1]);
  }, [data, qnumber])

  const setTiming = (Time)=>{
    setQuestion({ time: Time })
  }

  const handleCorrect = (sAid) => {
    setTimeout(() => {
      setTiming(Time);
      console.log(question.time)
      setQList([ ...qList, question ])
      setEarned(question.amount);
      if (qnumber === data.length) {
        setStop(true);
        gameOver(qList);
      }
      else {
        setTiming(Time);
        setQList([ ...qList, question ])
        console.log('QList = ',qList)
        setQnumber((previous) => previous + 1);
        document.getElementById(sAid).style.background = 'linear-gradient(#061161 , black)'
        document.getElementById(sAid).style.color = 'silver';
        // audioFunc.load();
        audioFunc.src = audioFunc.src;
      }
    }, 2000)
  }

  const handleFinalAnswer = (sAid, answer) => {
    setTimeout(() => {
      if (answer === question.answer) {
        document.getElementById(sAid).style.background = 'green';
        handleCorrect(sAid);
      }
      else {
        document.getElementById(sAid).style.background = 'red';
        if (document.getElementById('optionA').innerHTML === question.answer) {
          document.getElementById('optionA').style.background = 'green'
        }
        if (document.getElementById('optionB').innerHTML === question.answer) {
          document.getElementById('optionB').style.background = 'green'
        }
        if (document.getElementById('optionC').innerHTML === question.answer) {
          document.getElementById('optionC').style.background = 'green'
        }
        if (document.getElementById('optionD').innerHTML === question.answer) {
          document.getElementById('optionD').style.background = 'green'
        }
        setTimeout(() => {
          setStop(true);
          gameOver();
        }, 2000);
      }
    }, 2000);
  }

  const handleSelectedAnswer = (e) => {
    const sAid = e.target.id;
    // console.log(sAid)
    // setSelectedAnswer(document.getElementById(sAid).innerHTML)
    document.getElementById(sAid).style.background = 'yellow';
    document.getElementById(sAid).style.color = 'black';
    // audioFunc.pause();
    handleFinalAnswer(sAid, document.getElementById(sAid).innerHTML);
  }
  return (
    <>
    <div className='' style={{position: 'absolute', zIndex: '-1'}}>
      <embed id='audio' src={audio}/>
    </div>
    <div>
      <div className="question">{question.question}</div>
      <hr className="option-hr-1" />
      <hr className="option-hr-2" />
      <div className="options">
        <div className={`option`} id='optionA' onClick={handleSelectedAnswer}>A: {question.A}</div>
        <div className={`option`} id='optionB' onClick={handleSelectedAnswer}>B: {question.B}</div>
        <div className={`option`} id='optionC' onClick={handleSelectedAnswer}>C: {question.C}</div>
        <div className={`option`} id='optionD' onClick={handleSelectedAnswer}>D: {question.D}</div>
      </div>
    </div>
    </>
  )
}
