import React from 'react';
import Nbar from '../components/Nbar'; // Nbarコンポーネントをインポート
import Dashboard from '../components/Dashboard';

const Home: React.FC = () => {
  return (
    <div>
      <Nbar />  {/* ここでNbarコンポーネントを使用 */}
      <h1>Index</h1>
      <h4>root - indextest</h4>
      <a href="https://skytrx2023.vercel.app/test">test</a>
        <br />
      <a href="localhost:3000/test">test - dev</a>
    </div>
  );
};

export default Home;