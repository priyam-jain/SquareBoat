import React from 'react'
import {Link} from 'react-router-dom'
const colour={
    backgroundColor: 'orange',
}
function Header(props) {


  if(props.loggedIn)
    return (
      <div>
        <nav data-testid="navid" className="navbar navbar-light navbar-expand-lg" style={colour}>
  <Link className="navbar-brand" to="/">Jobs</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" data-cy="home" id="home">
        <Link to='/' className="nav-link">Jobs</Link>
      </li>
     
    </ul>
    
      <Link to="/logout">
    <button className="btn btn-danger my-2 my-sm-0" type="button" id="btnLogout">Log out</button>
    </Link>
    
  </div>
</nav>
      

  </div>
    )
    else 
      return (
        <nav data-testid="navid" className="navbar navbar-expand-lg navbar-light" style={colour}>
  <Link className="navbar-brand" to="/">Jobs</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav navbar-nav navbar-right">
      <li data-cy="login" id="login" className="nav-item active navbar-right">
        <Link to='/login' className="nav-link">Login</Link>
      </li>
      </ul>
        </div>
</nav>
      )
}

export default Header
