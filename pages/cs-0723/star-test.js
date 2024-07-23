import React, { useState } from 'react';
import Star from '@/components/star';
import { BiSolidDog, BiSolidDroplet } from 'react-icons/bi';

export default function StarTest() {
  const [r1, setR1] = useState(2);
  const [r2, setR2] = useState(3);
  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      <h2>對照組(預設屬性)</h2>
      <Star />
      <hr />
      <h2>測試組</h2>
      <Star
        maxCount={10}
        initRating={r1}
        onRatingChange={setR1}
        fillColor="red"
        emptyColor="#ccc"
        icon={<BiSolidDog />}
      />
      你選了{r1}分
      <button
        onClick={() => {
          setR1(5);
        }}
      >
        {' '}
        r1設定為5
      </button>
      <button
        onClick={() => {
          setR1(0);
        }}
      >
        {' '}
        r1設定為0
      </button>
      <hr />
      <Star
        maxCount={8}
        initRating={r2}
        onRatingChange={setR2}
        fillColor="pink"
        emptyColor="#000000"
        icon={<BiSolidDroplet />}
      />
      你選了{r2}分
    </>
  );
}
