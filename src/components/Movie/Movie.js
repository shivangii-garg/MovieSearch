import React from 'react';
import {Consumer} from '../Context/Context'
const Movie = () => {
return (
	<div>
	<Consumer>
		{
			value => {
				console.log(value);
				return <h1> Movie </h1>
			}
		}
	</Consumer>
	</div>
	);
}

export default Movie;