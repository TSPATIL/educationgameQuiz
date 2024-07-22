import React, { useContext } from 'react'

export default function () {
    const context = useContext(feedbackContext);
    const { feedback, getFeedBack } = context
    const [btnRadio, setBtnRadio] = useState(1);
    const handleOnRadioChange = (e) => {
        if (document.getElementById('btnradio1').checked === true) {
            setBtnRadio(1)
        }
    }
    useEffect(() => {
        getFeedBack();
    }, []);
  return (
    <div className='container-fluid my-4'>
            <div className="py-4 text-center">
          <h2>Result</h2>
        </div>
        <div className="text-center">
            <div className="btn-group mb-3 container" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check btn-lg" name="btnradio" id="btnradio1" onChange={handleOnRadioChange} autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Played Quizes</label>
            </div>
            <hr className="mb-4" />
            <div className="text-center mx-5">
            {
                btnRadio === 1 ?
                    <div className='row my-3'>
                        {
                            !localStorage.getItem('token') ? <div className='container my-3'>Login to check results</div> :
                                feedback.length === 0 ? <div className='container my-3'>No results to display</div> :
                                    feedback.map((feed) => {
                                        console.log(feed)
                                        return <AnswerPlayed key={feed._id} feed={feed} />
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
