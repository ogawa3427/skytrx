import { useRouter } from 'next/router';
import Navbar from '../../components/Nbar';
import BibUnit from '../../components/BibUnit';
import CommentList from '../../components/CommentList';

import React from 'react';
import papers from '../../public/data/papers.json';

const A = () => {
  const router = useRouter();
  const { doi } = router.query;

  const baselist = [...papers];

  // DOIに基づいて論文を選択
  let article = baselist.filter(paper => paper.doi === doi);

  let refs = article[0].reference;

  let reference = baselist.filter(paper => refs.includes(paper.doi));
  return (
    <div>
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
      <BibUnit articles={reference} />
    </div>
  );
}

export default A;