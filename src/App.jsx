import Rating from './components/Rating/Rating';
import Success from './components/Success/Success';
import './App.css';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState('1');
  const [isRating, setIsRating] = useState(true);
  return (
    <div className="flex items-center justify-center bg-very-dark-blue h-lvh">
      <h1 style={{ display: 'none' }}>Interactive rating component</h1>
      <div className="p-8 bg-dark-blue sm:rounded-3xl max-w-[375px] min-h-[375px] m-4 rounded-xl flex">
        {isRating ? (
          <Rating setRating={setRating} setIsRating={setIsRating} />
        ) : (
          <Success rating={rating} />
        )}
      </div>
    </div>
  );
}

export default App;
