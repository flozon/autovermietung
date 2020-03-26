import React from "react";
import Sidenav from "./sidenav";
import Card from './cards'
import axios from 'axios';
import storage from './storage'
import { Redirect } from 'react-router-dom'

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = { loaded: false, redirect: false };
        this.toCar = this.toCar.bind(this);
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/cars/');
        this.setState({
            cars: res.data,
            loaded: true
        });
    }

    toCar(car) {
        storage.car = car;
        storage.car.numberImages = storage.car.add_picture.length + 1;
        this.setState({ redirect: true });
    }

    renderCards() {
        if (!this.state.loaded) {
            return;
        }

        const cols = [[], [], [], []];
        let i = 0;
        this.state.cars.forEach(car => {
            cols[i].push(
                <Card car={car} toCar={this.toCar} />
            );
            i++;
            i = i % 4;
        });

        const cards = [];
        for (let i = 0; i < 4; i++) {
            cards.push(
                <div className="col s6 m4 l3">
                    {cols[i]}
                </div>
            );
        }
        return cards;
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/details' />
        }

        return (
            <div>
                <div className="row" id="searchLine">
                    <div className="col s2 m2 l1 right" >
                        <Sidenav />
                    </div>
                    <div className="col s10 m5 l3 right">
                        <div className="input-field " id="searchField">
                            <i className="material-icons prefix small">search</i>
                            <input placeholder="Suche" id="first_name" type="text" className="validate " />
                        </div>
                    </div>

                </div>
                <div className="divider"></div>
                <div className="row">
                    {this.renderCards()}
                </div>
            </div>

        );
    }
}

export default Homepage;