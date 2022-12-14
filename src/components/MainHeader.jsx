import React from 'react'
import { Link } from 'react-router-dom';
import mainHeader from '../images/mainHeader.png'
import '../pages/home/Home.css';

const MainHeader = () => {
  return (
    <header className='main__header'>
       <div className="container main__header-container">
          <div className="main__header-left">
             <h4>#100DaysOfWorkOut</h4>
             <h1>Join the Legends Of The Fitness World</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt rem nobis beatae cumque? Quidem ullam repellat voluptate aspernatur impedit.</p>
             <Link to="/plans" className='btn lg'>Get Started</Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={mainHeader} alt="Main Header Image" />
            </div>
          </div>
       </div>
    </header>
  );
}

export default MainHeader;