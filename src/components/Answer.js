import React, { useContext, useState } from 'react'
import AnswerPlayed from './AnswerPlayed';
import AnswerCreated from './AnswerCreated';
import answerContext from '../contexts/Answer/answerContext';
import { useEffect } from 'react';

export default function Answer() {
    const context = useContext(answerContext);
    const { answer, getAnswer, setAnswer, getAnswerQuiz } = context
    const [btnRadio, setBtnRadio] = useState(1);
    const handleOnRadioChange = (e) => {
        if (document.getElementById('btnradio1').checked === true) {
            setBtnRadio(1)
        }
        if (document.getElementById('btnradio2').checked === true) {
            setBtnRadio(2)
        }
    }
    useEffect(() => {
        getAnswer();
        console.log("answer = ", answer)
    }, [])

    const handleOnClick1 = () => {
        getAnswer();
    }
    const handleOnClick2 = () => {
        getAnswerQuiz();
    }
    return (
        <div className='container-fluid my-4'>
            <div className="py-4 text-center">
          <h2>Result</h2>
        </div>
        <div className="text-center">
            <div className="btn-group mb-3 container" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check btn-lg" name="btnradio" id="btnradio1" onClick={handleOnClick1} onChange={handleOnRadioChange} autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Played Quizes</label>

                <input type="radio" className="btn-check btn-lg" name="btnradio" id="btnradio2" onClick={handleOnClick2} onChange={handleOnRadioChange} autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Created Quizes</label>
            </div>
            <hr className="mb-4" />
            <div className="text-center mx-5">
            {
                btnRadio === 1 ?
                    <div className='row my-3'>
                        {
                            !localStorage.getItem('token') ? <div className='container my-3'>Login to check results</div> :
                                answer.length === 0 ? <div className='container my-3'>No results to display</div> :
                                    answer.map((ans) => {
                                        console.log(ans)
                                        return <AnswerPlayed key={answer._id} ans={ans} />
                                    })
                        }
                    </div>
                    : null
            }
            {
                btnRadio === 2 ?
                    <div className='row my-3'>
                        {
                            !localStorage.getItem('token') ? <div className='container my-3'>Login to check results</div> :
                                answer.length === 0 ? <div className='container my-3'>No results to display</div> :
                                answer.map((ans) => {
                                    console.log("answer = ", answer)
                                    console.log("ans = ", ans)
                                    return <AnswerCreated key={ans._id} ans={ans}/>
                                })
                        }
                    </div>
                    : null
            }
            </div>
            </div>
        </div>
    )
}
