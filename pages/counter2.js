import React from 'react'

export default function 計數器2ounter2() {
  return (
    <>
      <h1>計數器2</h1>
      <h1 id="total">0</h1>
      <button
        id="increase"
        onClick={() => {
          const total = document.querySelector('#total')
          total.textContent = Number(total.textContent) + 1
        }}
      >
        +1
      </button>
    </>
  )
}
