import { useEffect } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import {increaseVisitCount} from './components/firebase/firebase'

function App() {

  useEffect(() => {
    increaseVisitCount();
  }, [])

  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
