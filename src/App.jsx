import { useState } from 'react';
import './App.css';
import Callback from './components/Callback';

function App() {
  const [uicolor, setUIColor] = useState();

  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className='App'>
      <div className='App_color_container' style={{ background: `${uicolor}` }}>
        <Callback getColor={getColor} />
      </div>
    </div>
  );
}

export default App;
