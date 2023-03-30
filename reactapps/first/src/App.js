import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const datee = new Date().toLocaleDateString();

 const time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    const time = new Date().toLocaleTimeString();
    // console.log(time);
    setCtime(time);
  }
  setInterval(UpdateTime, 1000);

  const hr = new Date().getHours();
  let message;
  if(hr<12){
        message = "Good Morning";
    
      }
      else if(hr<17){
        message = "Good Afternoon";
    
      }
      else{
        message = "Good Evening";
}
  return (
    <div>
     <h1 style= {{color:"red"}} >This is H1</h1>
     <p>This is Paragraph Tag </p>
     <ol>
      <li >Wednesday</li>
      <li>Lucifer</li>
      <li>Money Heist</li>
      <li>Peaky Blinders</li>
      <li> Squid Game</li>
     </ol>


     <h2>Today Date is {datee}</h2>
     <h2>Current Time is {ctime}</h2>


<h3 className='greet' >Message: {message} </h3>
{/* ${} */}
    </div>
  );
}

export default App;
