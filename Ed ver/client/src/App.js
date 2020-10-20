import React from "react";
//import axios from "axios";



import List from './components/List';
import CrudOperations from './components/CrudOperations';

import "./App.css";


function App() {

 // location.assign("https://www.w3schools.com")
  return (
    <div className="App">
      <header className="App-header">
       
        <CrudOperations />
       
      </header>
    </div>
  );
}
// <Testpage /> <List />
export default App;
