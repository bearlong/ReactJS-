import React, { useState } from 'react';

export default function MySelect() {
  // 下拉清單選項
  const cityOptions = ['台北市', '新北市', '桃園市'];
  // 記錄下拉清單中選中的字串值，初始值為空白字串代表沒有選中任何值
  const [city, setCity] = useState('');

  return (
    <>
      <select
        // 在react(jsx)中為了方便使用，讓select可以使用value屬性和onChange方法來綁定狀態
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        {/* 為了要對應初始city狀態，要加入這個初始預設的選項 */}
        <option value="">請選擇城市</option>
        {cityOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
    </>
  );
}
