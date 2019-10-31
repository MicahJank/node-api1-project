import React from 'react';
import logo from './logo.svg';


import Users from './components/Users.js';
import AddUserForm from './components/AddUserForm.js';

function App() {
  return (
    <div className="App">
      <AddUserForm />
      <Users />
    </div>
  );
}

export default App;
