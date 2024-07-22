import { useState } from 'react';

// 範例資料
import data from '@/data/books.json';

import Item from './item';

export default function List() {
  // 擴增原本的書籍資料，多一個能代表是否有加入收藏(或我的最愛)的屬性值fav(布林值，預設false)
  const initStatus = data.map((v) => {
    return { ...v, fav: false };
  });

  // 宣告狀態
  const [books, setBooks] = useState(initStatus);

  const handleToggleFav = (isbn) => {
    const nextBooks = books.map((v, i) => {
      // 如果符合(id是3)回傳修改的屬性text是"ccccc"字串
      if (v.isbn === isbn) {
        return { ...v, fav: !v.fav };
      } else {
        // 否則回傳原物件
        return v;
      }
    });
    setBooks(nextBooks);
  };

  return (
    <>
      <h1>書籍清單(元件拆解組合範例)</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>書名</th>
            <th>作者</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <Item
                key={book.isbn}
                book={book}
                handleToggleFav={handleToggleFav}
              />
            );
          })}
          {/* <tr>
            <td>XXX</td>
            <td>XXX</td>
            <td>XXX</td>
            <td>
              <Image src={bookmarkIcon} alt="" />
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}
