import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import { TrafficLight } from '../js/components/TrafficLight.jsx'
import { NewButton } from '../js/components/NewButton.jsx'



const root = ReactDOM.createRoot(document.querySelector('#root'));

const App = () => {
  const [active,setActive] = useState(null);
  const [lightColors,setLightColors] = useState(["red","yellow","green"]);

  const purpleLight = () => {
    if(lightColors.includes("purple")){
      return;
    }
    setLightColors (newColors => {
      return [...newColors,"purple"];
    });
  };
  
  return(
    <>
      <div className="stick"></div>
      <main className="traffic-light-container">
        {lightColors.map((color,index) => (
          <TrafficLight
            key = {index}
            color = {color} 
            activeGlow = {active === color} 
            onClick = {()=>setActive(color)} 
          />
        ))}
      </main>
      <section>
        <NewButton onClick ={purpleLight} />
      </section>
     
    </>
     
  )
};
root.render(<App />);