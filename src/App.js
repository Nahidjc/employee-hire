import React from 'react';
import Employees from './components/Employees/Employees';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <br />
      <Employees></Employees>
    </div>
  );
};

export default App;