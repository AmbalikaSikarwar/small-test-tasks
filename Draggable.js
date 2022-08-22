import React, { useState, useRef } from 'react';
import './App.css';
 
const App = () => {
 
  const [list, setList] = useState(['Ambalika','Mahima','Santoshi','Ruchika','Madhu']);
 
  return (
    <>
    {
    list&&
    list.map((item, index) => (
      <div style={{backgroundColor:'pink', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        key={index}
      draggable>
          {item}
      </div>
      ))}
    </>
  );
};
export default App;
