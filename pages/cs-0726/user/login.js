import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/use-auth';

export default function Login() {
  // 2.在任何子元件層級深度，使用useContext 勾子讀取它:
  const { auth, login, logout } = useAuth();

  // 定義路由器
  const router = useRouter();

  return (
    <>
      <h1>登入頁面</h1>
      <hr />
      {/* 不要使用a連結，a連結會導致頁面重新整理載入，context中的狀態都會回復初始值 */}
      {/* <a href="/cs-0726/user/profile"> 連至 會員個人資料頁(a連結)</a> */}
      <br />
      {/* Link元件取代a連結，可以保持狀態目前的值 */}
      <Link href="/cs-0726/user/profile"> 連至 會員個人資料頁(Link連結)</Link>
      <hr />
      <p>目前登入狀況: {auth.isAuth ? '已登入' : '未登入'}</p>
      <button
        onClick={
          auth.isAuth
            ? logout
            : () => {
                login();
                // 登入後跳轉到個人資料頁(使用router)
                // router.push 也可以跳轉到某個指定頁面並保持目前的狀態值
                router.push('/cs-0726/user/profile');
              }
        }
      >
        {auth.isAuth ? '登出' : '登入'}
      </button>
    </>
  );
}
