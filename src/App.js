import { useEffect } from 'react';
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';
import useLoader from './Hooks/useLoader';
import './App.css';

function App() {

  const [loading, , initLoader, , , renderSpinner ] = useLoader();
  
  useEffect(() => {
      initLoader();
  }, []);

  return (
    <div className="App">
      <ComponentOne />
      {loading ? renderSpinner() : null}
      <ComponentTwo />
    </div>
  );
}

export default App;
