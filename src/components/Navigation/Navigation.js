import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Particles from 'react-particles-js';

const particlesOptions = {                    
particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const Navigation = () =>
{
	return (
		<main>
		<Particles className ="particles" params={particlesOptions} />
	      
			<nav className ='f3 pv4' style = {{display: 'flex',justifyContent: 'flex-end' , justifyContent: 'space-around'}}>
				<NavLink to ='/dashboard'className='link dim black pointer'> Dashboard </NavLink>	
				<NavLink to ='/explore'className='link dim black pointer'> Explore </NavLink>	
				<NavLink to ='/aboutus'className='link dim black pointer'> About Us </NavLink>	
				<NavLink to ='/' className='link dim black pointer'> Signout </NavLink>	
				</nav>
				<div className = "tc pv6 f-headline lh-solid i  "> WE ARE MOVIE BUFFS, {"\n"} {"\n"} Checkout Movie Details By Clicking "Explore"!!  </div>
			
		</main>
		);
}

export default Navigation;
