import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import './App.css';
import { useState } from 'react';

function App() {
  var data={
    montly:"45,000",
    annual:"12,00,000",
    task:20,
    pending:18
  }
  let[value,setvalue]=useState("hai")
  return <>
  <div id='wrapper'>
<Sidebar/>
<Dashboard data={data} setvalue={setvalue} value={value}/>
</div>

  </>
}

export default App;
