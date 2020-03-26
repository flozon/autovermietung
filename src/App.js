import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss';
import Homepage from './components/homepage'
import Impressum from './components/impressum'
import Kontakt from './components/kontakt'
import NotFound from './components/notfound'
import Details from './components/details'
import Admin_Page from './components/admin_page'
import Add_Car from './components/add_car'

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<nav>
						<div className="nav-wrapper red lighten-3" id="navbar">
							<Link className="brand-logo center" to="/">Home</Link>
							<ul className="right ">
								<li><Link to="/impressum">Impressum</Link></li>
								<li><Link to="/kontakt">Kontakt</Link></li>
							</ul>
						</div>
					</nav>

					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/homepage" component={Homepage} />
						<Route path="/impressum" component={Impressum} />
						<Route path="/kontakt" component={Kontakt} />
						<Route path="/details" component={Details} />
						<Route path="/admin" component={Admin_Page} />
						<Route path="/add_car" component={Add_Car} />
						<Route component={NotFound} />
					</Switch>

				</Router>
			</div>
		);
	}
}

export default App;
