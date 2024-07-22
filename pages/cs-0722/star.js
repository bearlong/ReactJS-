import React, { useState } from 'react';
// 導入.module.css檔案
import styles from '@/styles/star.module.css';

export default function Star() {
  const [rating, setRating] = useState(0);
  // 滑鼠游標懸停(hovey)，預設為0代表沒分
  const [hoverRating, sethoverRating] = useState(0);

  return (
    <>
      <h1>星星評分範例</h1>
      {Array(5)
        .fill()
        .map((v, i) => {
          // 分數從1到5(索引值+1)
          const score = i + 1;
          return (
            <button
              key={score}
              className={styles.starBtn}
              onClick={() => {
                // 選按後設定分數
                setRating(score);
              }}
              onMouseEnter={() => {
                // 進入時設定分數
                sethoverRating(score);
              }}
              onMouseLeave={() => {
                //移出時變回預設值
                sethoverRating(0);
              }}
            >
              {/* 判斷是否點亮星號，如分數大於對應星號則on */}
              <span
                className={
                  score <= rating || score <= hoverRating
                    ? styles.on
                    : styles.off
                }
              >
                &#9733;
              </span>
            </button>
          );
        })}
      你選了{rating}分
    </>
  );
}
