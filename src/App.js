import './App.css';
import Body from './Components/Body';
import Header from './Components/Header'
import { useState } from "react";


function App() {

  const [active, setActive] = useState(false);

  return (
    <div>
      <Header active={active} setActive={setActive}/>
      <Body active={active} setActive={setActive}/>
    </div>  
  );
}

export default App;
