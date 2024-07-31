import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PacmanLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

//資料夾中的`[productCode].js`檔案，代表這資料夾中，除了根(索引)路由(index.js)與靜態路由(有名稱的例如list.js之外),都算這個檔案中的實作結果，例如`/product/123`
export default function Detail() {
  // 第一步: 宣告路由器
  // router.query 物件值，裡面會包含pid屬性值
  // router.isReady 布林值，初次渲染會是false，next會經過"水合化作用"(相當於SSR)後，再渲染一次，讓isReady改變成true，代表水合畫完成，此時才能得到query值
  const router = useRouter();

  //商品用狀態
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  // 載入指示動畫用布林狀態
  // 預設值為true，代表一開始進入
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    const apiURL =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
      id;
    const res = await fetch(apiURL);
    const data = await res.json();
    // 設定到狀態中 ==> 觸發re-render(進入update階段)
    setProduct(data);

    // 關閉載入動畫
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const loader = (
    <PacmanLoader
      color="yellow"
      loading={isLoading}
      cssOverride={override}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );

  // 第二步: 用useEffect監聽router.isReady變動，當改變為true時代表query有productCode可以使用了
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);

      // 向伺服器要求獲取資料
      getProduct(router.query.productCode);
    }
    // 以下為省略eslint檢查一行
    // eslint-disable-next-line
  }, [router.isReady]);

  // 向伺服器fetch獲取資料

  const display = (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      <p>
        <Link href={`./list`}>連至 列表頁</Link>
      </p>
      <h2>{product.name}</h2>
      <p>NT. {product.price}</p>
      <p>庫存 {product.stock}</p>
    </>
  );

  return <>{isLoading ? loader : display}</>;
}
