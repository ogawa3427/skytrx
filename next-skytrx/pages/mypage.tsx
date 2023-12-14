import React from "react";
import Navbar from "../components/Nbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const MyPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // useStateを使用して状態を管理
    const [lstatus, setLstatus] = useState('reviewedWaiting'); // useStateを使用して状態を管理
    useEffect(() => {
        const token = Cookies.get('loggedin');
        if (!token || token == 'false') {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
        const lstatus = Cookies.get('enoughor');
        if (!lstatus || lstatus == 'reviewedWaiting') {
            setLstatus('reviewedWaiting');
        } else {
            setLstatus('reviewedEnough');
        }
    }, []); // useEffectを使用してクライアントサイドでのみログイン状態を設定

    return (
      <div>
        <Navbar isLoggedIn={true} />
        <h1>MyPage</h1>
      </div>
    );
};
export default MyPage;