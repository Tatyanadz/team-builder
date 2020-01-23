import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import Form from'./Form';
import CurrentMember from './CurrentMember';

function App() {
  const [team, setTeam] = useState(data);

  const addMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <CurrentMember team={team}/>
      <Form addMember={addMember}/>
    </div>
  );
}

export default App;
