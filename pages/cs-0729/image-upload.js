import { set } from 'lodash';
import { useState } from 'react';

export default function ImageUpload() {
  // 紀錄選擇的圖片檔案，特殊物件初始值使用
  const [selectedFile, setSelectedFile] = useState(null);
  // 預覽圖片的網址(呼叫URL.createObjectURL產生的網址)
  const [previewURL, setPreviewURRL] = useState('');
  // 紀錄伺服器回應的json字串
  const [message, setMessage] = useState('');

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedFile(file);
      setPreviewURRL(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewURRL('');
    }
  };

  const handleFileUpload = async () => {
    const fd = new FormData();

    // 對照伺服器要接收的檔案欄位名稱，加上要上傳的檔案物件
    fd.append('avatar', selectedFile);

    // 傳送到伺服器
    const res = await fetch('http://localhost:5555/upload-avatar', {
      method: 'POST',
      body: fd,
    });
    const data = await res.json();
    setMessage(JSON.stringify(data));
  };

  return (
    <>
      <h1>圖片預覽上傳</h1>
      <hr />
      <div>
        <input type="file" onChange={handleImgChange} />
      </div>
      <div>
        <button onClick={handleFileUpload}>上傳到伺服器</button>
      </div>
      <div>
        預覽:
        <img src={previewURL} alt="" />
      </div>
    </>
  );
}
