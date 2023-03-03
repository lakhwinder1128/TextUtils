 import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
           setAlert(null);
        },1000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#1f1f20';
    showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
<Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} Dropdown ="Dropdown" About="About"/>      

   <Alert alert={alert}/>
  {/* <Navbar /> */}
   <div className="container my-3">
    
      <Routes>
          <Route exact path="/about"  element={ <About/>}  /> 
          <Route exact path="/"  element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>} />
       </Routes>
  
   
   {/* <About/> */}
   </div>
   </Router>
   </>
  );
}

export default App;

