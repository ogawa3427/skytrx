import React from "react";
import Navbar from "../components/Nbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";

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
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Post a Paper</Typography>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Your Papers</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Enough Reviewed</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Waiting for Review</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Need to Revise</Typography>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Others' Papers</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Submitted Review</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Unsubmitted Review</Typography>
        <Footer />
      </div>
    );
};
export default MyPage;