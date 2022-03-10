import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Login from './Components/login/login';
import Jobs from './Components/jobs/Jobs';
import Header from './Components/header/Header';
import Logout from './Components/logout/Logout';

function App() {
  const [loggedin, setloggedin] = useState(false)
  const success=()=>setloggedin(true);
  const logout=()=>setloggedin(false);
  return (
    <div className="App">
      <Router>
      <Header loggedIn={loggedin}/>
      <Switch >
      <Route exact path="/login" component={() =><Login suckcess={success}/>} /> 
      <Route exact path="/" component={() =><Jobs/>} /> 
      <Route exact path="/logout" component={() =><Logout logout={logout}/>} />
      </Switch ></Router>

    </div>
  );
}

export default App;
