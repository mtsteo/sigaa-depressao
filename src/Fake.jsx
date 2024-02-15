import React from "react";
import { useState, useEffect } from "react";


const Fake = () => {
 
  const timerStyle = {
    textAlign: "center",
  };


  return (
    <>
      <div style={timerStyle}>
        <div id="timer" style={timerStyle}>
         <h1>VOCE FOI REDIRECIONADO PARA UMA PAGINA FALSA!</h1>
         <br />
         <br />
         <br /> 
         <h1>Authors: Mateus Eufrasio e Vinicius Lima</h1>
         <br />
         <br />
         <h1>Obrigado a Todos!</h1>
        </div>
        
      </div>
      
    </>
  );
};

export default Fake;
