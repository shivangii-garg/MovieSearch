import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () =>
{
	return (
		<div className = 'ma4 ma0 '>
		<nav className ='f2 i pv3 tr'>
				<NavLink to ='/navigation' className='link dim black pointer '> Home </NavLink>
			</nav>
			
			<h1 className ="pv6 f2 white"> No search made yet, Please go to "explore" Option on home page!</h1>
					</div> 
		);
}

export default Dashboard ;