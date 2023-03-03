import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <>
     <h1>ECM CAR Portal</h1>
        <header>
          
           <nav>
            <div className="left">
                <ul>
                    <li>All Categories</li>
                    <li>about us</li>
                    <li>course</li>
                    <li>ecm/ecu ics</li>
                    <li>tools</li>
                    <li>products</li>
                </ul>
            </div>
            <div className="right">
                <span><i class="fa-solid fa-phone"></i></span>
                <h3>need help?</h3>
            </div>
           </nav>
        </header>
    </>
  )
}

export default Header