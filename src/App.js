import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router';
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import { PersonComponent } from './components/PersonComponent';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = '8UhIDesENpSi71FqwcxQNyAjZTBz6Sj5e0TRg05n';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'IgUY0r9fHuyRFH3K2yo3YJ1tc67boLULyTowvkMm';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/testPerson" element={<PersonComponent/>} />
        
        </Routes>
      </header>
    </div>
  );
}

export default App;
