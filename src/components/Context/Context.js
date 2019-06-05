import React from 'react';
import Movie from '../Movie/Movie';

const Context = React.createContext();

const Provider = () => {
	state = {
		movie_list : [
			{
				movie: {movie_name: 'abc'}	
			},
			{
					movie: {movie_name: '123'}
			}
		]
	}

	return (
		<Context.Provider value ={this.state}>
		{
			this.props.children
		}
		</Context.Provider>
		);
}

export const Consumer = Context.Consumer;