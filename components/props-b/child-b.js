import React, { useEffect, useState } from 'react';

export default function ChildB({ setDataFromChild = () => {} }) {
  // 狀態為元件內部私有，其他元件無法得知
  const [cDate, setCData] = useState('child b data');

  // 設定狀態的函式有副作用(不能直接在元件主體呼叫)
  //   setDataFromChild(cDate);

  //   正確的第2種方法;
  useEffect(() => {
    setDataFromChild(cDate);
  }, []);

  return (
    <>
      <h3>Child-b (子女)</h3>
      <button
        onClick={() => {
          setDataFromChild(cDate);
        }}
      >
        傳資料給子女a
      </button>
    </>
  );
}
