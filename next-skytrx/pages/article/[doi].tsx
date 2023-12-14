import { useRouter } from 'next/router';
import Navbar from '../../components/Nbar';
import BibUnit from '../../components/BibUnit';
import CommentList from '../../components/CommentList';

import React from 'react';
import papers from '../../public/data/papers.json';

const A = () => {
  const router = useRouter();
  const currentpath = router.asPath;
  const doi = currentpath.replace('/article/', '');

  const baselist = [...papers];

  // DOIに基づいて論文を選択
  let article = [];
  article = baselist.filter(paper => paper.doi === doi);
  console.log(article[0]);
  const ref = article[0].reference;
  console.log(ref);
  let references = [];
  references = baselist.filter(paper => ref.includes(paper.doi));
  console.log(references);

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

export default A;