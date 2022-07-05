
import React from 'react';

function HelloWorld({hello, world, date }) {
    return (
      <div>
       
        <h1>
          {hello}, {world}! </h1> 
        <p>({date.toLocaleString()})</p>
        
      </div>
    )
  }
  
  export default HelloWorld;