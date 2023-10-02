// import React from 'react'
// import "./header.css";

// const Header = () => {
//   return (
//     <>
//             <div className="header">
//                 <div className="container header-content">
//                     <h1>Empowering Society Through Science</h1>
//                     <p>Food Lab is one point solution for all food safety needs</p>
//                     <button>Get Started</button>
//                 </div>
//             </div>
//     </>
//   )
// }

// export default Header

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header bg-primary text-center py-5">
      <div className="container header-content">
        <h1 className="display-4">Empowering Society Through Science</h1>
        <p className="lead">Food Lab is one point solution for all food safety needs</p>
        <button className="btn btn-success btn-lg">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
