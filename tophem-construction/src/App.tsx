
import './App.css'
import Footer from './components/Footer'
import Home from "./components/Home"
import NavBar from './components/NavBar'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
