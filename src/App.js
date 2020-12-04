import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import { client } from './client';
import Climbs from './Components/Climbs/Climbs';

export default class App extends React.Component {
	state = {
		articles: [],
	};

	componentDidMount() {
		client
			.getEntries()
			.then((response) => {
				console.log(response);
				this.setState({
					articles: response.items,
				});
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<nav>
						<Header />
					</nav>
					<main>
						<Switch>
							<Route path='/climbs'>
								<Climbs climbs={this.state.articles} />
							</Route>
							<Route path='/about'>
								<About />
							</Route>
						</Switch>
					</main>
				</div>
			</div>
		);
	}
}
