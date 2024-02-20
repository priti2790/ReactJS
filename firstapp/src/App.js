import React from 'react';
import {useState} from "react";
import './App.css';

function App() {
  let [setvalue, newvalue]= useState(0)
  return (
   <div>
    
    <center>
    <h1> This is my Counter machine</h1>
      <div id="counterbox"><h3 id="content">{setvalue}</h3> 

      </div> <br/>
      <button class="btn btn-primary" onClick={()=>newvalue(setvalue+1)}>Counter</button>
      <button class="btn btn-primary" onClick={()=>newvalue(setvalue-1)}>Counter Back</button>
    </center>
    </div>
  );
}

export default App;
