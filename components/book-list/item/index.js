import { useState } from 'react';

import FavIcon from './fav-icon';
export default function Item({ isbn, title, author, fav, handleToggleFav }) {
  return (
    <>
      <tr key={isbn}>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon isbn={isbn} fav={fav} handleToggleFav={handleToggleFav} />
          {/* <Image
            src={book.fav ? bookmarkIconFill : bookmarkIcon}
            alt=""
            onClick={() => {
              handleToggleFav(book.isbn);
            }}
          /> */}
        </td>
      </tr>
    </>
  );
}
