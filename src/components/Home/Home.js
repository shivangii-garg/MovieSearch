import React from 'react';
import Logo from'../Logo/Logo';
import Particles from 'react-particles-js';
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Signin from '../Signin/Signin';
import './Home.css';

const particlesOptions = {                    
particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const Home = () =>
{
	return (
		<div>
	      <Particles className ="particles" params={particlesOptions} />
	      <Logo/>
			<h1 class="f-headline lh-solid tc i "  >MOVIE SEARCH</h1>
			<div className = "tc">
				<NavLink to ="/signin" className="b ph3 pv2 ba b--black bg-transparent grow pointer f10 dib link black mh7">Sign In</NavLink>
	    	</div>
	    </div>
    		
		);
}

export default Home;