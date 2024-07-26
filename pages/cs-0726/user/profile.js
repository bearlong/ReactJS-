import React, { useContext } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

export default function Profile() {
  const { auth } = useAuth();

  return (
    <>
      <h1>會員資料頁</h1>
      <hr />
      <Link href="/cs-0726/user/login"> 連至 會員登入頁(Link元件)</Link>
      <hr />
      <p>會員id: {auth?.userData?.id}</p>
      <p>帳號: {auth?.userData?.name}</p>
      <p>email: {auth?.userData?.email}</p>
      <p>姓名: {auth?.userData?.username}</p>
    </>
  );
}
