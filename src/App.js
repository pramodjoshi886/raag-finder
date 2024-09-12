import './App.css';
import RaagaFinder from './components/RaagFinder';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = "Raag Finder";
  }, []);
  return (
    <div >
      <RaagaFinder />
    </div>
  );
}


export default App;
