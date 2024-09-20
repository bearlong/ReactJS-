import { useState, useEffect } from 'react';


export default function CountdownTimer({initialTime = 0, isChanged = false}) {
const [time, setTime] = useState(initialTime)

const handleResetTime = () => {
setTime(initialTime)
}

useEffect(() => {
    if(time <= 0) return
    const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
}, [time])

useEffect (() => {
    setTime(initialTime)
}, [initialTime, isChanged])

useEffect(() => {
  import('bootstrap/dist/css/bootstrap.min.css');
}, []);
  return (
    <>
      <h4>倒數計時</h4>
      <p>Time: <span className='text-danger'>{time}</span></p>
      <button className='btn btn-success' onClick={handleResetTime}>Reset</button>
    </>
  );
}
