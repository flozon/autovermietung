import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss';
import Homepage from './components/homepage'
import Impressum from './components/impressum'
import Kontakt from './components/kontakt'
import NotFound from './components/notfound'

class App extends React.Component {
	constructor() {
		super();
		this.state = { site: "homepage" };
		this.handleState = this.handleState.bind(this);
	}

	handleState(newState) {
		this.setState(newState);
		alert("ouih");
	}

	render() {
		return (
			<div className="App">
				<Router>
					<nav>
						<div className="nav-wrapper red lighten-3">
							<a href="#!" className="brand-logo center"><Link to="/">Home</Link></a>
							<ul className="right ">
								<li><Link to="/impressum">Impressum</Link></li>
								<li><Link to="/contact">Kontakt</Link></li>
							</ul>
						</div>
					</nav>

					<Switch>
						<Route exact path="/" render={() => (<Homepage state={this.state} handleState={this.handleState} />)} />
						<Route path="/homepage" render={() => (<Homepage state={this.state} />)} />
						<Route path="/impressum" render={() => (<Impressum state={this.state} />)} />
						<Route path="/contact" render={() => (<Kontakt state={this.state} />)} />
						<Route component={NotFound} />
					</Switch>

				</Router>
			</div>
		);
	}
}

export default App;
