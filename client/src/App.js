//TODO: add a logo.svg
//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/navbar/Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
