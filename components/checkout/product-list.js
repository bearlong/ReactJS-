import React from 'react';
import products from '@/data/Product.json';
import styles from './cart.module.css';
import { useCart } from '@/hooks/use-cart';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function ProductList() {
  const { handleAdd = () => {} } = useCart();

  const notify = (productName) => {
    toast.success(
      <p>
        {productName + '已成功加入購物車'}
        <br />
        <Link href="/cs-0726/checkout/cart">前往購物車</Link>
      </p>
    );
  };
  return (
    <>
      <ul className={styles['list']}>
        {products.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    notify(v.name);
                    handleAdd(v);
                  }}
                >
                  加入購物車
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Toaster />
    </>
  );
}
