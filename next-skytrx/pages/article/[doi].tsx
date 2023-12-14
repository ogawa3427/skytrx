import { useRouter } from 'next/router';
import Navbar from '../../components/Nbar';


const A = ({ id }) => {
  const router = useRouter();
  const { doi } = router.query;

  return (
    <div>
      <Navbar />
      <h1>A: {doi}</h1>
      {doi}
    </div>
  );
}

export default A;
