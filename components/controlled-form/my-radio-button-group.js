import React, { useState } from 'react';

export default function MyRadioButtonGroup() {
  // 選項按鈕群組
  // 選項陣列
  const petOptions = ['貓', '狗', '倉鼠'];
  // 設定狀態
  const [pet, setPet] = useState('');
  const handleRadioChange = (value) => {
    setPet(value);
  };
  return (
    <>
      <div title="radio-button-group">
        <h2>選項按鈕群組(radio button group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                checked={v === pet}
                // 配合第二種寫法定義value值
                value={v}
                // 每個radio選項用自己本身的值和狀態相比，相符的會是true，反之false
                onChange={(e) => {
                  // 第一種寫法 v值(map時得到)
                  //   setPet(v);
                  // 第二種寫法 使用事件目標對象值，注意要加上value屬性
                  handleRadioChange(e.target.value);
                }}
              />
              {v}
            </label>
          );
        })}
      </div>
    </>
  );
}
