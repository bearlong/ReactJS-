import React, { useState } from 'react';

export default function MyTextarea() {
  const [textareaText, setTextareaText] = useState('');

  return (
    <>
      <div title="textarea">
        <h2>文字輸入區域</h2>
        {/* html原本標記是使用開頭與結尾的寫法，
        在react(jsx)中被更改為使用單個的標記，類似input-text的寫法 */}
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value);
          }}
        />
      </div>
    </>
  );
}
