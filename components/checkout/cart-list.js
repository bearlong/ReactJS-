import React from 'react';
import styles from './cart.module.css';
import { useCart } from '@/hooks/use-cart';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function CartList() {
  const {
    cartItems,
    handleIncrease = () => {},
    handleDecrease = () => {},
    handleRemove = () => {},
  } = useCart();

  const MySwal = withReactContent(Swal);

  const notifyAndRemove = (productName, productId) => {
    MySwal.fire({
      title: '你確定嗎',
      text: '這個操作無法復原',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除它',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '已刪除!',
          text: productName + ' 已成功刪除',
          icon: 'success',
        });
        handleRemove(productId);
      }
    });
  };

  return (
    <>
      <ul className={styles['list']}>
        {cartItems.map((v) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    handleIncrease(v.id);
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    const nextQty = v.qty - 1;
                    if (nextQty <= 0) {
                      notifyAndRemove(v.name, v.id);
                    } else {
                      handleDecrease(v.id);
                    }
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    notifyAndRemove(v.name, v.id);
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
