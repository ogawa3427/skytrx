import { useRouter } from 'next/router';
import Navbar from '../../components/Nbar';
import BibUnit from '../../components/BibUnit';

import React from 'react';
import papers from '../../public/data/papers.json';

const A = ({ id }) => {
  const router = useRouter();
  const { doi } = router.query;

  const baselist = [...papers];

  let article = [];
  article.push(baselist[id]);
  console.log(article);
  return (
    <div>
      <Navbar />
      <h1>A: {doi}</h1>
      {doi}
      <BibUnit articles={article} />
    </div>
  );
}

export default A;
