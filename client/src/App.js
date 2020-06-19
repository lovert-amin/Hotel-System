import React from 'react';
import Navbar from "./Components/navbar/Navbar";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer"
import Rooms from "./Components/rooms/Rooms"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";




function App() {
  return (
    <div>
      <Router>

      <Navbar/>
      
        <Switch>
         <Main/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
