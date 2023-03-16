import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState(process.env.REACT_APP_NAME_OF_PROJECT)

  return (
    <div className="App">
       Welcome to {result}
    </div>
  );
}

export default App;
