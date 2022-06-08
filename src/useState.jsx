  import {React,useState} from 'react';
  import './usestate.css'
  
  
  
  function Hookusestate() 
  {
    const[myName, setMyname] = useState('shad')
    
    const changeName = () => {
      //for toggle purpose
      let val = myName;
      (val==='shad') ?
      setMyname('Malik'): setMyname('shad')
    }
      return (
        <div className="App">
          <h1>{myName}</h1>
    
    <button className ='btn' onClick={changeName}>Clik Me</button>      
        </div>
      );
    }
    export default Hookusestate;