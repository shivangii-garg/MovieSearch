import React from 'react';
import { NavLink } from 'react-router-dom';

const Aboutus = () =>
{
	return (
		<div className = 'ma4 ma0 '>
		<nav className ='f2 i pv3 tr'>
				<NavLink to ='/navigation' className='link dim black pointer '> Home </NavLink>
			</nav>
			
			<h1 className ="pv6 f2 white i">20 years ago in South Africa a seed of an idea was planted, a dream was shared. Inception happened. 
			20 years on, we look back at what we've built. Leave it up to us, and we'd love to do it all over again. We provide you with the details of all the movies
			as per your requirement, so sit back and enjoy this MOVIE BOOK!!</h1>
					</div> 
		);
}

export default Aboutus ;