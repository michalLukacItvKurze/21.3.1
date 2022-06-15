import React, { useState } from 'react';
import Formular from './Formular';
import "./App.css";


function App(){
  
  const [data, zmenData]=useState([]);
  const [prveNacitanie,zmenPrveNacitanie]=useState(true);
 
  console.log('Loading   '+ prveNacitanie);

  if(prveNacitanie){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      console.log('Sme vo fetch' + json);
      zmenData(json)
      zmenPrveNacitanie(false);
    })
  }
  return (
    <>
      <a href=''>Stranka 1</a>
      {data.map(element=> <p>{element.title}</p>)}
      <Formular funkciaPreZmenuDatRodica={zmenData}/>
    </>
  );
  
}
  

export default App;