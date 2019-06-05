import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

class Explore extends Component{
	constructor(){
		super();
		this.state = {
			details:{},
			movie_name:''
		}
		this.getData = this.getData.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({movie_name: event.target.value});
	}

	getData () {
		console.log("start");
		axios.get(`http://www.omdbapi.com/?t=${this.state.movie_name}&apikey=168d291`)
		.then(res => {
			console.log(res.data);
			this.setState({details:res.data});
			console.log(this.state.details);
		})
		console.log("End");
		console.log(this.state.details.Title);
	}

	render() {
		return (
			<main className=" tc  ">
			<nav className ='f3 pv3 ' style = {{display: 'flex',justifyContent: 'flex-end' , justifyContent: 'space-around'}}>
				<NavLink to ='/navigation' className='link dim black pointer '> Home </NavLink>
			</nav>
			<input type = "text" name='movieName' onChange = {this.handleChange} value = {this.state.movie_name}/>
			<button className="b pb0 ph3 pv2 white bg-black grow pointer f6 dib" onClick = {this.getData}> Search </button>
			<div className = "dib br3 pa3 ma2 grow bg-light-blue flex flex-column w5 tc">
			<h1>{this.state.details.Title}</h1>
			<h2>{this.state.details.Released}</h2>
			<h2>{this.state.details.Genre}</h2>
			<h2>{this.state.details.imdbRating}</h2>
			</div>
			</main>
			);
	}
}

export default Explore;
	
