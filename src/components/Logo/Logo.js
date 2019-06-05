import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import Movie from './Movie.png'
const Logo = () =>
{
	return (
		<div className = 'ma4 ma0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
				 <div className="Tilt-inner"> <img className= 'pa3' src ={Movie} height = {210}/> </div>
			</Tilt>
		</div> 
		);
}

export default Logo ;