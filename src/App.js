import './App.css';
import React, {useEffect, useState} from 'react';
import TableContainer from './components/TableContainer';
import musicianGenerator from './utilities/FakeMusicians';
function App() {
  const generateSomeMusicians = (count) => {
    const musicians = [];
    for (let i=0; i<count; i++){
      musicians.push(musicianGenerator())
    }
    return musicians;
  }

  const [musicians, setMusicians] = useState(generateSomeMusicians(10));

  useEffect(()=>{
    console.log(musicians)
  },[musicians])
  return (
    <div className="App">
      <h1>Great Artists That Never Existed!</h1>
      <TableContainer musicians={musicians}/>
    </div>
  );
}

export default App;
