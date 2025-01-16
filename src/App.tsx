import axios from 'axios';
import * as React from 'react';

const App: React.FunctionComponent = () => {
  const handleGet = () => {
    axios.get('/api/posts').then((r) => console.log('response', r));
  };

  return (
    <>
      <div className='p-5'>
        <h2>React - Vite - Environment Study</h2>
        <hr />
        <button className='btn btn-primary' onClick={handleGet}>
          Get Data
        </button>
      </div>
    </>
  );
};

export default App;
