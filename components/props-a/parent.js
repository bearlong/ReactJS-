import React from 'react';
import Child from './child';

export default function Parent() {
  return (
    <>
      <h2>Parent(父母)</h2>
      {/* 誰 render 誰? 父母 render 子女 */}
      {/* 父母元件利用類似HTML給定屬性質的方式，傳遞各種類型的值給子女元件 */}
      {/* <Child
        titles="test"
        price={123}
        isConnected
        aa={[1, 2, 3]}
        oa={{ a: 1, b: 2 }}
        sum={(a, b) => a + b}
      /> */}
      <Child titles={123} price={true} isConnected="aaa" />
    </>
  );
}
