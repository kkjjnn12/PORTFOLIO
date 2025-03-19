import './App.css';
import Home from './Component/Home'
import Skill from './Component/Skill'
import Project from './Component/Project'
import About from './Component/About'
import Contact from './Component/Contact'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar'

function App() {
  return (
    <div>
      <Navbar/>

      
    
      <Routes>
        
        <Route path="/" element={<Home/>} />

        <Route path="Skill" element={<Skill/>} />

        <Route path="Project" element={<Project/>} />

        <Route path="About" element={<About/>} />

        <Route path="Contact" element={<Contact/>} />

  

        </Routes>


       </div>
)}

export default App;