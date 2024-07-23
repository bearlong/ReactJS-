import React, { useState, useEffect } from 'react';
// 導入.module.css檔案
import styles from './star.module.css';

export default function Star({
  maxCount = 5, // 最多可以評的分數(幾顆星星)
  initRating = 0, // 初始評分(一開始要點亮幾顆星星)
  onRatingChange = () => {}, // 點亮後回傳值回去
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>, // 用<>...</> 包裹起來才是React元素
}) {
  // 可能是一種反樣式: Props In Initial State
  // 如果只是單純初始化值，原本的使用是沒問題的，但要綁訂到父母元件的變動時就會有不同步的問題
  // 參考: https://vhudyma-blog.eu/react-antipatterns-props-in-initial-state/
  // https://medium.com/@joabi/react-anti-patterns-props-in-initial-state-ad8e1060cd87
  const [rating, setRating] = useState(4);
  // 滑鼠游標懸停(hovey)，預設為0代表沒分
  const [hoverRating, sethoverRating] = useState(0);

  // 使用useEffect作完全綁定父母元件傳入狀態
  // 解決反樣式: Props In Initial State (使用屬性值來設定元件的初始化狀態)
  // 監聽傳入的initRating屬性值的更動，一旦有更動就設定本元件的rating狀態評分
  // 這種元件在官方文件中稱為controlled component(可控/受控的 元件)
  useEffect(() => {
    setRating(initRating);
  }, [initRating]);
  return (
    <>
      {Array(maxCount)
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
                onRatingChange(score); // 回傳回父母元件
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
                // 使用 css modules解決方案套用動態屬性 + css3變數 + style屬性
                style={{
                  '--fill-color': fillColor,
                  '--empty-color': emptyColor,
                }}
                className={
                  score <= rating || score <= hoverRating
                    ? styles.on
                    : styles.off
                }

                // 使用styled-jsx解決方案套用動態顏色屬性
                // className={
                //   score <= rating || score <= hoverRating ? 'on' : 'off'
                // }
                // // 內聯樣式(inline style)或稱為style屬性是帶入動態樣式屬性最簡單的解決方案
                // style={{
                //   color:
                //     score <= rating || score <= hoverRating
                //       ? fillColor
                //       : emptyColor,
                // }}
              >
                {icon}
              </span>
            </button>
          );
        })}
      {/* 使用styled-jsx解決方案套用動態顏色屬性 */}
      {/* <style jsx>
        {`
          .on {
            color: ${fillColor};
          }
          .off {
            color: ${emptyColor};
          }
        `}
      </style> */}
    </>
  );
}
