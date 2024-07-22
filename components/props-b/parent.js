import React, { useState } from 'react';
import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  const [pData, setPData] = useState('parent data');

  // 宣告一組專門要給ChildB傳資料的狀態
  const [dataFromChild, setDataFromChild] = useState('');
  return (
    <>
      <h2>parent (父母)</h2>
      {/* P -> C 獲得狀態值的變數 */}
      <ChildA dataFromChild={dataFromChild} />
      {/* C -> P 用設定狀態的函式傳給子女元件 */}
      <ChildB setDataFromChild={setDataFromChild} />
      <p>來自子女元件B的資料: {dataFromChild}</p>
    </>
  );
}
