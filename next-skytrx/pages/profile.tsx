import React, { useEffect, useState } from "react";
import Navbar from "../components/Nbar";
import Cookies from "js-cookie";

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // useStateを使用して状態を管理

    useEffect(() => {
        const token = Cookies.get('loggedin');
        if (!token || token == 'false') {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, []); // useEffectを使用してクライアントサイドでのみログイン状態を設定

    return (
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <h1>Profile</h1>
      </div>
    );
};
export default Profile;