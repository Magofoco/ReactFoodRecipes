import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from "./components/MyNavbar";
import MySearchBar
  from "./components/MySearchBar";
function App() {
  return (
    <div className="App">
    <MyNavbar />
    <MySearchBar />
    </div>
  );
}

export default App;
