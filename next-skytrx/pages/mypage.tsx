import React from "react";
import Navbar from "../components/Nbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";

import papers from "../public/data/papers.json";
import BibUnit from "../components/BibUnit";
import SbmForm from "../components/SbmForm";

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

    const baselist = [...papers];
    const your_enough = baselist
        .filter(paper => paper.status === 'enough')
        .filter(paper => paper.personalid.includes('25'));

    const baselist2 = [...papers];
    const your_waiting = baselist2
        .filter(paper => paper.status === 'waitingreview')
        .filter(paper => paper.personalid.includes('25'));

    const your_need = baselist
        .filter(paper => paper.status === 'needrevise')
        .filter(paper => paper.personalid.includes('25'));

    return (
      <div>
        <Navbar isLoggedIn={true} />
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Post Papers</Typography>
        <SbmForm />
                


        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Your Papers</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Enough Reviewed</Typography>
        <BibUnit articles={your_enough} status={'enough'} />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Waiting for Review</Typography>
        <BibUnit articles={your_waiting} status={'reviewedWaiting'} />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Need to Revise</Typography>
        <BibUnit articles={your_need} status={'reviewedWaiting'} />
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Others' Papers</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Submitted Review</Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Unsubmitted Review</Typography>
        <Footer />
      </div>
    );
};
export default MyPage;