import { useRouter } from 'next/router';
import Navbar from '../../components/Nbar';
import BibUnit from '../../components/BibUnit';
import CommentList from '../../components/CommentList';
import Typography from '@mui/material/Typography';
import Footer from '../../components/Footer';
import OverallReview from '../../components/OverallReview';

import React, { useEffect, useState } from 'react';
import papers from '../../public/data/papers.json';
import Cookies from 'js-cookie';

const Review = () => {
  const router = useRouter();
  const currentpath = router.asPath;
  const doi = currentpath.replace('/review/', '');

  const baselist = [...papers];

  const [isLoggedIn, setIsLoggedIn] = useState(false); // useStateを使用して状態を管理

  useEffect(() => {
    const token = Cookies.get('loggedin');
    if (!token || token == 'false') {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []); // useEffectを使用してクライアントサイドでのみログイン状態を設定

  // ページが最初にロードされたときに、router.query が空の可能性があるため、
  // このチェックを行います。
  if (!router.isReady) {
    return <div>Loading...</div>; // ロード中の表示
  }

  let article = baselist.filter(paper => paper.doi === doi);
  console.log(article);
  let thearticle = article.length > 0 ? article[0] : null;
  let references = [];

  if (thearticle && thearticle.reference) {
    // 参照論文の検索
    references = thearticle.reference.map(ref => baselist.find(paper => paper.doi === ref));
  }

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <BibUnit articles={article} status={'enough'} />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 4, paddingRight: '10px' }}>
        <img src={`/pdfs/${doi}.png`} alt="description_of_image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 2 }}>
          <CommentList toSearchProp={doi} />
        </div> 
      </div>
      <OverallReview doi={doi}/>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>References</Typography>
      <BibUnit articles={references} status={'enough'}/>   
      <Footer />   
    </div>
  );
}

export default Review;