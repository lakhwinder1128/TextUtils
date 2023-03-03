import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   <div className="container-fluid">
     <Link className="navbar-brand" to="/">{props.title}</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link active" to="/about">{props.About}</Link>
         </li>
         <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             {props.Dropdown}
           </Link>
           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><Link className="dropdown-item" to="/">Action</Link></li>
             <li><Link className="dropdown-item" to="/">Another action</Link></li>
             <li><hr className="dropdown-divider"></hr></li>
             <li><Link className="dropdown-item" to="/">Something else here</Link></li>
           </ul>
         </li>
         <li className="nav-item">
           <Link className="nav-link disabled">Disabled</Link>
         </li>
       </ul>
       <div>
   <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
   </div>
       <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
         <button className="btn btn-primary" type="submit">Search</button>
       </form>
     </div>
   </div>
  
 </nav>
    </>
  )
}


Navbar.propTypes={title:  PropTypes.string.isRequired,
                  aboutText: PropTypes.string.isRequired }

Navbar.defaultProps={
    title:'set title here',
    aboutText:'About'
}                  