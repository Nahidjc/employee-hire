import React from 'react';
import Employees from './components/Employees/Employees';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
const App = () => {

  const [searchEmployee, setSearchEmployee] = useState('');
  const handleSearch = (event => {
    let search = event.target.value;
    setSearchEmployee(search);
  })
  return (
    <div>
      <Navbar handleSearch={handleSearch}></Navbar>

      <Header></Header>
      <br />
      <Employees searchEmployee={searchEmployee}></Employees>
    </div>
  );
};

export default App;