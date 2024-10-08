import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EffectPattern() {
  const [total, setTotal] = useState({ value: 0 });

  // 樣式1: 沒有第二個傳入參數(相依變數陣列)
  // 意義:每次渲染之後(after)，都會執行一次第一個傳入參數(作用回調函式)中的程式碼
  // 主要用途: 一般恨少使用，主要用於紀錄or除錯，或是一些特殊鉤子開發

  // 甚麼時候會重新渲染?
  // 1. new props 2.use state 3. props state
  useEffect(() => {
    console.log('每次渲染之後(after)，都會執行一次這裡');
  });

  // 樣式2: 第二個傳入參數總是保持空陣列
  // 意義: 首次渲染之後，執行一次第一個傳入參數(作用回調函數)中的程式碼，之後因沒有任何與變數相依，不再執行，此行為有加入第二個執行參數的預設行為
  // 主要用途: 最常使用到的樣式，近似於didMount生命週期方法執行的時間點，葉面首次呈現後，和伺服器作fetch/ajax獲取資料呈現在葉面上，或是整合第三方js應用
  useEffect(() => {
    console.log('首次渲染之後(after)，會執行一次這裡，之後不會再執行');
  }, []);
  // ^^ 這裡保持空白陣列，代表不與任何相依變數相依，相當於套用"有加入第二傳入參數的預設行為"

  // 樣式3: 第二傳入參數有相依變數
  // 意義: 首次渲染之後(after)，執行一次第一個傳入參數(作用回調函數)中的程式碼，當相依變數更動後，會再執行一次
  // 主要用途: 第二常使用的樣式，近似於didMount+didUpdate二合一的生命週期方法執行時間點
  // 狀態異步的解決方法之一，通常用於狀態更動連鎖 A->B->C，不同資料要套用到同一元件上
  useEffect(() => {
    console.log(
      '首次渲染之後(after)，會執行一次這裡，之後當total更動後，會再執行這裡一次'
    );
  }, [total.value]);
  // ^^^^^^^^ total加入相依變數陣列中，代表要監聽total狀態的更動(change)事件

  // 樣式4:第一個傳入參數(作用回調函式)的回傳值(是另一個函式)
  // 意義: 元件被移出真實DOM之前(before) 會執行一次
  // 主要用途: 近似於willUnmount(cleanup)，通常搭配樣式2使用，作元件移出前的"清理工作"
  useEffect(() => {
    return () => {
      console.log('元件被移出真實DOM之前(before)會執行一次');
    };
  }, []);

  return (
    <>
      <h1>Effect應用4種樣式</h1>
      <hr />
      <Link href="/">連至 首頁</Link>
      <h1>{total.value}</h1>
      <button
        onClick={() => {
          setTotal({ value: 1 });
        }}
      >
        setTotal v:1
      </button>
    </>
  );
}
