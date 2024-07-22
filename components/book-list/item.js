import { useState } from 'react';
import Image from 'next/image';

// 範例資料

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';
export default function Item({ book, handleToggleFav }) {
  return (
    <>
      <tr key={book.isbn}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Image
            src={book.fav ? bookmarkIconFill : bookmarkIcon}
            alt=""
            onClick={() => {
              handleToggleFav(book.isbn);
            }}
          />
        </td>
      </tr>
    </>
  );
}
