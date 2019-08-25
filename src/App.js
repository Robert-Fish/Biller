import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Sass/Main.scss'
import Header from './Components/Header';
import Expense from './Components/Expense';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Expense></Expense>
      <Expense></Expense>
      <Expense></Expense>
      <Expense></Expense>
      <Expense></Expense>
      <Expense></Expense>
    </div>
  );
}

export default App;
