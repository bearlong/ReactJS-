import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//資料夾中的`[pid].js`檔案，代表這資料夾中，除了根(索引)路由(index.js)與靜態路由(有名稱的例如list.js之外),都算這個檔案中的實作結果，例如`/product/123`
export default function Detail() {
  const [pid, setPid] = useState('');
  // 第一步: 宣告路由器
  // router.query 物件值，裡面會包含pid屬性值
  // router.isReady 布林值，初次渲染會是false，next會經過"水合化作用"(相當於SSR)後，再渲染一次，讓isReady改變成true，代表水合畫完成，此時才能得到query值
  const router = useRouter();

  // 第二步: 用useEffect監聽router.isReady變動，當改變為true時代表query有pid可以使用了
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      setPid(router.query.pid); // 取得query��性值，並設置��pid
    }
    // 以下為省略eslint檢查一行
    // eslint-disable-next-line
  }, [router.isReady]);

  // 向伺服器fetch獲取資料

  return (
    <>
      <h1>{pid}</h1>
    </>
  );
}
