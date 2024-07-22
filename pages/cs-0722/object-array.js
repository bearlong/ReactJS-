import { useState } from 'react';

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
];

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample);

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' };

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data];

          //3
          setData(nextData);
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' };

          //1 //2
          const nextData = [...data, newObj];

          //3
          setData(nextData);
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 產生id的方式
          // 1. 使用uuid或是nanoid(函式庫，需安裝)
          // const newID = self.crypto.randomUUID();

          // 2. 簡單隨機字串函式庫或語法
          // const newID = (Math.random() + 1).toString(36).substring(7);

          // 3. 利用時間日期字串，或是轉換為毫秒整數
          // 也可以用Number(new Date()) 或 +new Date()
          // const newID = Date.now();

          // 4. 仿照資料庫資料表自動進行遞增id數字值(注意，只能id是數字類型才能使用)
          // ids= [1, 2, 3, 4]

          const ids = data.map((v) => v.id);
          // 新id為最大值+1，如果陣列中沒有資料則從1開始計算
          const newID = data.length > 0 ? Math.max(...ids) + 1 : 1;

          const newObj = { id: newID, text: 'xxx' };
          const nextData = [newObj, ...data];
          setData(nextData);
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const ids = data.map((v) => v.id);
          const newID = data.length ? Math.max(...ids) + 1 : 1;
          const newObj = { id: newID, text: 'yyy' };
          const nextData = [...data, newObj];
          setData(nextData);
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1 // 2
          // filter 跟 map 一樣，會產生新陣列，不會修改到呼叫的陣列，所以不會有副作用
          // const nextData = data.filter((v, i) => {
          //   return v.text.includes('a');
          // });

          // 3
          setData(
            data.filter((v, i) => {
              return v.text.includes('a');
            })
          );
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          const nextData = data.filter((v, i) => {
            return v.text !== 'b';
          });
          setData(nextData);
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1. filter(推薦)
          // const nextData = data.filter((v, i) => {
          //   return v.id !== 4;
          // });
          // setData(nextData);

          // 2. for迴圈
          // const nextData = [];
          // for (let i = 0; i < data.length; i++) {
          //   if (data[i].id !== 4) {
          //     nextData.push(data[i]);
          //   }
          // }

          // 3. splice(黏接)，注意有副作用，可能會更動到呼叫他的陣列，呼叫前要先拷貝，另外他是典型的使用索引值操作的方法
          // 刪除公式: array.splice(deleteIndex, 1)
          //
          // 1. 先找到id為4的物件索引值
          const foundIndex = data.findIndex((v) => v.id === 4);

          // 2. 判斷是否有找到索引值
          if (foundIndex !== -1) {
            // 有找到
            // 2-1 拷貝
            const nextData = [...data];
            // 2-2 在副本上處理
            nextData.splice(foundIndex, 1);
            // 2-3 設定回狀態
            setData(nextData);
          }
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1. map + 展開物件拷貝({...v})
          // const nextData = data.map((v, i) => {
          // 如果符合(id是3)回傳修改的屬性text是"ccccc"字串
          // if (v.id === 3) {
          //   return { ...v, text: 'cccc' };
          // } else {
          // 否則回傳原物件
          //     return v;
          //   }
          // });
          // setData(nextData);

          // 2. 深拷貝
          // 1. 先找到id為3的物件索引值
          const foundIndex = data.findIndex((v) => v.id === 3);
          // 2. 判斷是否有找到索引值
          if (foundIndex !== -1) {
            // 有找到
            // 2-1 拷貝
            const nextData = JSON.parse(JSON.stringify(data));
            // 2-2 在副本上處理
            nextData[foundIndex].text = 'cccc';
            // 2-3 設定回狀態
            setData(nextData);
          }
        }}
      >
        8. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          const nextData = [];
          setData(nextData);
        }}
      >
        9. 清空表格
      </button>
      <br />
      <button
        onClick={() => {
          // 1. slice(切割)
          // 語法公式(注意不包含endindex): array.slice(startIndex, endIndex)
          // 1. 先找到id為2的物件索引值
          // const foundIndex = data.findIndex((v) => v.id === 2);
          // 2. 判斷是否有找到索引值
          // if (foundIndex !== -1) {
          //   const aa = data.slice(0, foundIndex + 1);
          //   const ab = data.slice(foundIndex + 1);
          //   const nextObj = { id: 5, text: 'bbb' };
          //   const nextData = [...aa, nextObj, ...ab];
          //   setData(nextData);
          // }
          // 2. 使用splice(黏接)
          // 插入公式(在某個索引之後): array.splice(inserIndex + 1, 0, value)
          // 1. 先找到id為2的物件索引值
          const foundIndex = data.findIndex((v) => v.id === 2);
          // 2. 判斷是否有找到索引值
          if (foundIndex > -1) {
            // 2-1 深拷貝
            const nextData = JSON.parse(JSON.stringify(data));
            // 2-2
            nextData.splice(foundIndex + 1, 0, { id: 5, text: 'bbb' });
            setData(nextData);
          }
        }}
      >
        10. 在id為2後面插入id為5與文字為bbb的物件
      </button>
    </>
  );
}
