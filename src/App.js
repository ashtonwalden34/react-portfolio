import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Documents from "./Pages/Documents"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar/Navbar"
// import Header from "./Components/Header/Header"
// import Footer from "./Components/Footer/Footer"
import './App.css';


function App() {
  return (
   <Router>
     <div className="App">
         <div> < Navbar /> </div>
       {/* <div className="jumbotron"> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/documents" component={Documents}/>
        <Route exact path="/contact" component={Contact} />
       {/* </div> */}
     </div>
     {/* <Footer /> */}
   </Router>
  );
}

export default App;