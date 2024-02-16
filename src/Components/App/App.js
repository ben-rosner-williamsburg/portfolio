import "./App.css";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <main className="app-container">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </main>
  );
}

export default App;
