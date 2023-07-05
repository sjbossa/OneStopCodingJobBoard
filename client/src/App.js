import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
