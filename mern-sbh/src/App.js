
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-dom';
// import {} from "react-router-dom";
import Navbar from './components/Navbar';
import User from './components/User';
import Home from './components/Home';
import Budget from './components/Budget';




function App() {
  return (
    <Router>
      <Navbar />

      <Route path='/user'>
        <User />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/budget'>
        <Budget />
      </Route>

    </Router>
    
  //  <div> 
     
  //   <header>


  //     <p>Small Business Helper</p>
        
  //       <p>
  //        Please Login to view your data
  //         or Register to get started.
  //       </p>
  //   </header> 

  //         <button className="loginbtn">Login</button>
  //         <button className="registerbtn">Register</button>
        
  //         </div>
     
  );
}

export default App;
