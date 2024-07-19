import React from 'react'

const aa = [1, 4, 9, 16]
const ab = aa.map((v, i) => {
  return <li key={i}>{v}</li>
})
// ab 相當於
// [<li key=0>1</li>]
// [<li key=1>4</li>]
// [<li key=2>9</li>]
// [<li key=3>16</li>]
export default function JsxMap() {
  return (
    <>
      <h1>JSX中陣列map渲染範例</h1>
      <ul>{ab}</ul>
      {/* 實作上不需要額外宣告ab，直接在jsx中寫map */}
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
