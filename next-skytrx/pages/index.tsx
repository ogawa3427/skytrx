import React from 'react';
import Nbar from '../components/Nbar'; // Nbarコンポーネントをインポート

const Home: React.FC = () => {
  return (
    <div>
      <Nbar />  {/* ここでNbarコンポーネントを使用 */}
      <h1>Index</h1>
      <h4>root - indextest</h4>
      <h4>test</h4>
    </div>
  );
};

export default Home;