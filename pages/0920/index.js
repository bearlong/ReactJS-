import { useState, useEffect }  from 'react'
import CountdownTimer from '@/components/countdownTime'

export default function Index() {
const [input, setInput] = useState("")
const [initialTime, setInitialTime] = useState(0)
const[isChanged, setIsChanged] = useState(true)
const handleSubmitInittime = () => {
    if(Number(input) >= 0 ) {
        setInitialTime(Number(input))
        setIsChanged(!isChanged)
        setInput("")
    } else {
        alert("請輸入大於零的數字")
        setInput("")
    }
}

useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
  }, []);
  return (
    <>
    <div className='container'>
<h4 className='my-3'>請輸入要倒數的時間</h4>
<input className='form-control mb-3'  type="number" value={input} onChange={(e) => {
    setInput(e.target.value)
}} />
<button className='btn btn-primary mb-3' onClick={handleSubmitInittime}>開始倒數</button>
<p>目前倒數秒數 : {initialTime}</p>
    <CountdownTimer initialTime = {initialTime} isChanged = {isChanged}/>
    </div>
    </>
  )
}
