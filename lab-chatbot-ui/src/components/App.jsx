import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Medical Lab Chatbot</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR updates.
        </p>
      </div>
    </>
  );
}

export default App;