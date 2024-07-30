import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function List() {
  // 注意1: 初始值至少要空陣列，初次render是用初始值
  // 注意2: 應用執行過程中，一定要保持狀態資料類型都是陣列
  const [products, setProducts] = useState([]);
  // 向伺服器fetch獲取資料
  const getProducts = async () => {
    const baseURL =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products';
    const res = await fetch(baseURL);
    const data = await res.json();
    console.log(data);
    // 設定到狀態中 ==> 觸發re-render(進入update階段)
    setProducts(data);
  };

  // 樣式2 didMount
  // 首次渲染之後，執行一次第一個傳入參數(作用回調函數)中的程式碼，之後因沒有任何與變數相依，不再執行，此行為有加入第二個執行參數的預設行為
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>產品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`./${v.id}`}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
