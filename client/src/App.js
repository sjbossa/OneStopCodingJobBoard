//TODO: add a logo.svg
//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './components/Card' 
import Navbar from "./components/navbar/Navbar";
import Home from "./components/navbar/Home";
import Signup from './pages/Signup';

export default function App() {

const [name, setName] = useState('Your Name');
const [job, setJob] = useState('Job Title');
const [about, setAbout] = useState("words all about myself... blah blah blah");

  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Card name={'Raccoon'} job={Coding Student} about={about}/>
    </div>
  );
}
