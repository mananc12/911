import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <div className='text-container'>
        
        <div className='text-container-text'>
        <h1>Lorem Ipsum</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <h5>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
        </div>

      </div>
    <div  className='card-container'>
      
    <div className='bigCard1'>
     <div className='bigCard1-text'>
        <h1>Lorem Ipsum</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    <div className='card1'>
    <Link to='/user'>
      <img className='user-img' src="/images/user.png" alt="User" />
      <div className='card-text'>User Profile</div>
      
    </Link>
    </div>
    </div>

    <div className='bigCard2'>
    <div className='card2'>
    <Link to='/search'>
    <img className='hospital' src="/images/hospitals.png" alt="User" />
    <div className='card-text'>Search Hospitals</div>
    </Link>
    </div>
    <div className='bigCard2-text'>
        <h1>Lorem Ipsum</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>


    </div>
    </div>
  )
}

export default Home