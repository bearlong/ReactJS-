import React from 'react';
import PropTypes from 'prop-types';

// 子女元件可以從函式的傳入參數值，得到父母元件傳來的值
// props必定是一個物件
// 再傳入參數值直接解構，提取每個屬性名稱成為變數名稱
// !!注意，一定要加花括號({})，才是物件的解構語法
// 目的1: 免除`props.xxxx`的物件取值程式碼
// 目的2: 使用函式傳入參數預設值語法，定義屬性預設值
export default function Child({
  titles = '', // 這裡使用指定值(=)的語法，定義屬性預設值
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <h3>Child(子女)</h3>
      {/* <p>titles={titles}</p>
      <p>price={price}</p>
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={aa}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(2, 3)={sum(2, 3)}</p> */}
    </>
  );
}

// Child.propTypes = {
//   titles: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   isConnected: PropTypes.bool.isRequired,
// };
