import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>
        <Link to='/'>Cats and Kanye</Link>
      </h1>
    </div>
  );
};

export default Header;