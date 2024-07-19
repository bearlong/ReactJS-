import React from 'react';
import { useState } from 'react';

export default function JsxCondRender() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>jsx中條件式渲染(conditional render)</h1>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +1
      </button>
      <hr />
      {/* if表達式語法(&&運算子)，因為判斷方式是用falsy，會有不精確的狀況，在0或NaN時一樣會被渲染呈現 */}
      {total && <p>1. 目前的total值是{total}</p>}
      {/* 強制轉換判斷式(第一個條件為布林值)，布林值不會被渲染呈現 */}
      {!!total && <p>2. 目前的total值是{total}</p>}
      {Boolean(total) && <p>3. 目前的total值是{total}</p>}
      {/* 改用比較運算子，必定會運算出布林值 */}
      {total !== 0 && <p>4. 目前的total值是{total}</p>}
      {total > 0 && <p>5. 目前的total值是{total}</p>}
      {/* 改用三元運算子，等同於(if...else...) */}
      {total ? <p>6. 目前的total值是{total}</p> : ''}
    </>
  );
}
