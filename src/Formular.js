import React, { useState } from 'react';

function Formular({funkciaPreZmenuDatRodica}){

  const[textovePole, zmenTextovePole] = useState('');
 
  return (
    <div>
      <input type='text' value={textovePole} onChange={(e)=>{
        zmenTextovePole(e.target.value);
        }}/>
        
        
        <button onClick={()=>{
          funkciaPreZmenuDatRodica((data) => {
            zmenTextovePole("");

            let noveData = data.concat({"title":textovePole});

            localStorage.setItem("data", JSON.stringify(noveData));
            return noveData;
        })
      }}>Posli Formular</button>
    </div>
  );
}

export default Formular;