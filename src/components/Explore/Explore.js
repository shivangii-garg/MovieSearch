import React from 'react';
import Movie from '../Movie/Movie';
import { NavLink } from 'react-router-dom';

const Explore = () => {
	return (
		<main>
		<nav className ='f3 pv3 ' style = {{display: 'flex',justifyContent: 'flex-end' , justifyContent: 'space-around'}}>
			<NavLink to ='/' className='link dim black pointer '> Signout </NavLink>		
			</nav>		
		<form className = "tc pv5 pb4 f4" >
			<input type = "text" name='movieName'/>
			<button class="b pb0 ph3 pv2 white bg-black grow pointer f6 dib"> Search </button>
			<Movie/>
		</form>
		</main>
		);
}

export default Explore;