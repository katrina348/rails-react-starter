import React from "react";
import { Link  } from "react-router-dom";
const NavBar =()=> {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/dummies'>Dummies</Link>
      </div>
    );
}
export default NavBar;