import Rating from './components/Rating/Rating';
import Success from './components/Success/Success';
import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center bg-very-dark-blue h-lvh">
      <h1 style={{ display: 'none' }}>Interactive rating component</h1>
      <div className="p-8 bg-dark-blue sm:rounded-3xl max-w-[375px] h-[375px] m-4 rounded-xl bg-dark-blue flex">
        <Rating />
        {/* <Success /> */}
      </div>
    </div>
  );
}

export default App;
