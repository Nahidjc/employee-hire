import React from 'react';
import Employees from './components/Employees/Employees';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Header></Header>
      <br />
      <Employees></Employees>
    </div>
  );
};

export default App;