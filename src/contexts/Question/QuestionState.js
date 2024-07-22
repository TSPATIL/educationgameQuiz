import React, { useState } from 'react'
import questionContext from './questionContext';

export default function QuestionState(props) {
    const [questionList, setQuestionList] = useState([]);
    const [quizCode, setQuizCode] = useState(0);
    const [subjectName, setSubjectName] = useState(0);
    const [userId, setuserId] = useState('');
    const [currentQues, setCurrentQues] = useState({ id: 1, language: '', topic: '', difficulty: '', question: '', A: '', B: '', C: '', D: '', answer: '', explanation: '', amount: 0, time: 0 });
    const [fiftyEmpty, setFiftyEmpty] = useState({a: '', b: ''});

    const handleFiftyFifty = ()=>{
        // console.log(currentQues);
        if(currentQues.A === currentQues.answer){
            setFiftyEmpty({a: currentQues.A});
        }
        if(currentQues.B === currentQues.answer){
            if(fiftyEmpty.a === ''){
                setFiftyEmpty({a: currentQues.B});
            }else {
                setFiftyEmpty({b: currentQues.B});
            }
        }
        if(currentQues.C === currentQues.answer){
            if(fiftyEmpty.a === ''){
                setFiftyEmpty({a: currentQues.C});
            }else {
                setFiftyEmpty({b: currentQues.C});
            }
        }
        if(currentQues.D === currentQues.answer){
            if(fiftyEmpty.a === ''){
                setFiftyEmpty({a: currentQues.D});
            }else {
                setFiftyEmpty({b: currentQues.D});
            }
        }
    }

    const getQuiz = async (joinQuiz) => {
        const response = await fetch(`http://127.0.0.1:5000/api/question/getquiz/${joinQuiz}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            console.log(json.question[0].questionList);
            setQuestionList(json.question[0].questionList);
            setQuizCode(json.question[0].quizcode);
            setSubjectName(json.question[0].subject);
            setuserId(json.question[0].user)
        }
        else{
            alert(json.error);
        }
    }

    const submitAnswer = async (qList, subjectName, quizCode, userId) =>{
        const response = await fetch('http://127.0.0.1:5000/api/answer/createanswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({subject: subjectName, questionList: qList, quizcode: quizCode, userId: userId })
        })
        const json = await response.json();
        if(json.success){
            console.log('Answer = ', json.answer);
        }
        else{
            alert(json.error)
        }
    }
    return (
        <questionContext.Provider value={{questionList, getQuiz, subjectName, quizCode, userId, submitAnswer, handleFiftyFifty, setCurrentQues, fiftyEmpty}}>
            {props.children}
        </questionContext.Provider>
    )
}
