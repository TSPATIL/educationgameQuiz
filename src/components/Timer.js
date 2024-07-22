import React, { useEffect, useState } from 'react'

export default function Timer({ setStop, qnumber, setTime }) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }
    const interval = setInterval(() => {
      setTimer((previous) => previous - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer])

  useEffect(() => {
    setTime(timer);
    setTimer(30);
  }, [qnumber])

  return (
    <div className="timer">{timer}</div>
  )
}
