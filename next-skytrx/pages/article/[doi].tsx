import { useRouter } from 'next/router';
import Navbar from '../../components/Nbar';
import BibUnit from '../../components/BibUnit';
import CommentList from '../../components/CommentList';

import React from 'react';
import papers from '../../public/data/papers.json';

const Article = () => {
  const router = useRouter();
  const currentpath = router.asPath;
  const doi = currentpath.replace('/article/', '');

  const baselist = [...papers];

  // ページが最初にロードされたときに、router.query が空の可能性があるため、
  // このチェックを行います。
  if (!router.isReady) {
    return <div>Loading...</div>; // ロード中の表示
  }

  let article = baselist.filter(paper => paper.doi === doi);
  let thearticle = article.length > 0 ? article[0] : null;
  let references = [];

  if (thearticle && thearticle.reference) {
    // 参照論文の検索
    references = thearticle.reference.map(ref => baselist.find(paper => paper.doi === ref));
  }
  //references = article.filter(paper => ref.includes(paper.doi));

  return (
    <div>
      <h2>{currentpath}</h2>
      <Navbar />
      <BibUnit articles={article} />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 4, paddingRight: '10px' }}>
          <img src="/pdfs/pdf.jpg" alt="description_of_image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 2 }}>
          <CommentList toSearchProp={doi} />
        </div> 
      </div>
      <BibUnit articles={references} />      
    </div>
  );
}

export default Article;