import React from 'react';
import styles from '@/components/checkout/cart.module.css';
import CartNavbar from '@/components/checkout/cart-navbar';
import ProductList from '@/components/checkout/product-list';
import Link from 'next/link';

export default function product() {
  return (
    <>
      <div className={styles['container']}>
        <CartNavbar />
        <h3>商品列表</h3>
        <p>
          <Link href="/cs-0726/checkout/cart">連至購物車</Link>
        </p>
        <div className={styles['product']}>
          <ProductList />
        </div>
      </div>
    </>
  );
}
