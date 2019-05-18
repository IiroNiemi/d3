import React from 'react';
import * as d3 from 'd3';
import Barchart from './barchart';
import './App.css';

function App() {

  fiboIndex(7);

  function fiboIndex(fiboI){
    var num1 = 0; 
    var num2 = 1;
    var tmp;

    for(var i = 0; i <= fiboI; i++){
      tmp = num1;
      num1 = num1 + num2;
      num2 = tmp;
    }

    return num2;
  }

  return (
    <div className="App">
      
      <Barchart />
      
    </div>
  );
}


export default App;
