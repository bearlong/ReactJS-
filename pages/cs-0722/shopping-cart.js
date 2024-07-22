import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const handleIncrease = (productId) => {
    //  1. map + 展開物件拷貝({...v})
    const nextProducts = products.map((v) => {
      // 如果符合(id是productId)回傳修改的屬性count的物件值
      if (v.id === productId) {
        return { ...v, count: v.count + 1 };
      } else {
        // 否則回傳原物件;
        return v;
      }
    });
    setProducts(nextProducts);
  };

  const handleDecrease = (productId) => {
    //  1. map + 展開物件拷貝({...v})
    let nextProducts = products.map((v) => {
      // 如果符合(id是productId)回傳修改的屬性count的物件值
      if (v.id === productId) {
        return { ...v, count: v.count - 1 };
      } else {
        // 否則回傳原物件;
        return v;
      }
    });
    nextProducts = nextProducts.filter((v) => v.count > 0);
    setProducts(nextProducts);
  };

  const handleRemove = (productId) => {
    const nextProducts = products.filter((v) => {
      return v.id !== productId;
    });
    setProducts(nextProducts);
  };

  const handleDecreaseCheck = (productId) => {
    //  1. map + 展開物件拷貝({...v})
    let nextProducts = products.map((v) => {
      // 如果符合(id是productId)回傳修改的屬性count的物件值
      if (v.id === productId) {
        return { ...v, count: v.count - 1 };
      } else {
        // 否則回傳原物件;
        return v;
      }
    });
    nextProducts = nextProducts.filter((v) => v.count > 0);
    setProducts(nextProducts);
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              const nextCount = product.count - 1;
              if (nextCount <= 0) {
                if (confirm('你確定要移除此商品嗎?')) {
                  handleRemove(product.id);
                }
              } else {
                handleDecrease(product.id);
              }
            }}
          >
            –
          </button>
          <button
            onClick={() => {
              handleDecreaseCheck(product.id);
            }}
          >
            –(官方解法)
          </button>
        </li>
      ))}
    </ul>
  );
}
