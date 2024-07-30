import React from 'react';

export default function Html5ValidForm() {
  return (
    <>
      <h1>html5表單驗證範例</h1>
      <hr />
      {/* 需要在form標記中才會有作用 */}
      <form>
        <div>
          姓名:
          <input type="text" name="name" required />
        </div>
        <div>
          email:
          <input type="email" name="email" required />
        </div>
        <div>
          {/* 確認密碼與密碼欄位，因為是跨欄位比對檢查，HTML5表單驗証不透過JS是無法達成 */}
          password:
          <input
            type="password"
            maxLength={12}
            minLength={6}
            name="password"
            required
          />
        </div>
        <div>
          出生年月日:
          <input
            type="date"
            name="date"
            min="1900-01-01"
            max="2021-01-01"
            required
          />
        </div>
        <div>
          手機號碼:
          <input
            type="text"
            name="phone"
            maxLength="11"
            pattern="09\d{2}-\d{6}"
            placeholder="格式為09XX-xxxxxx"
            required
          />
        </div>
        <div>
          {/* 在form標記中使用button記得寫類型(type)屬性，原因是預設是submit */}
          <button type="submit">送出</button>
        </div>
      </form>
    </>
  );
}
