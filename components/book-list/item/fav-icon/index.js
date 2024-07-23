import React from 'react';
import Image from 'next/image';

// 範例資料

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';

export default function FavIcon({
  isbn = {},
  fav = {},
  handleToggleFav = () => {},
}) {
  return (
    <>
      <Image
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
        onClick={() => {
          handleToggleFav(isbn);
        }}
      />
    </>
  );
}
