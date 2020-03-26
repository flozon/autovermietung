import React from "react";
import M from 'materialize-css'
import axios from 'axios';
import Calendar from './calendar'
import storage from './storage'
import { Redirect } from 'react-router-dom'

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
        }
        this.handlePages = this.handlePages.bind(this);
    }

    async componentDidMount() {
        var carouselInstance = M.Carousel.init(document.getElementById("carousel"), { fullWidth: true });
        this.setState({
            loaded: true,
            carousel: carouselInstance,
            currentImage: 0,
        });
    }

    handlePages(e) {
        if (this.state.loaded) {
            const action = parseInt(e.target.id);
            let newImage;
            switch (action) {
                case -1:
                    if (this.state.currentImage === 0) {
                        newImage = storage.car.numberImages - 1;
                    } else {
                        newImage = storage.car.currentImage - 1;
                    }
                    break;
                case -2:
                    if (this.state.currentImage === storage.car.numberImages - 1) {
                        newImage = 0;
                    } else {
                        newImage = this.state.currentImage + 1;
                    }
                    break;
                default: newImage = action;
            }

            this.setState({ currentImage: newImage })

            this.state.carousel.set(newImage);
        }

    }

    handleHighlight(index) {
        if (index === this.state.currentImage) {
            return "active";
        } else {
            return "";
        }
    }

    createPagination() {
        let pages = [];
        for (let i = 0; i < storage.car.numberImages; i++) {
            pages.push(<li class={this.handleHighlight(i)}><p className="a" onClick={this.handlePages} id={i}>{i + 1}</p></li>)
        }
        return (
            <ul class="pagination center hide-on-med-and-down">
                <li class=""><p className="a"><i class="material-icons" onClick={this.handlePages} id={-1}>chevron_left</i></p></li>
                {pages}
                <li class=""><p className="a"><i class="material-icons" onClick={this.handlePages} id={-2}>chevron_right</i></p></li>
            </ul>
        );
    }

    renderCarousel() {
        const items = [];
        items.push(
            <p className="carousel-item">
                <img className="imageSlider responsive-img" src={process.env.PUBLIC_URL + "/images/" + storage.car.main_picture} alt="Bild" />
            </p>
        );
        storage.car.add_picture.forEach(ele => {
            items.push(
                <p className="carousel-item">
                    <img className="imageSlider responsive-img" src={process.env.PUBLIC_URL + "/images/" + ele} alt="Bild" />
                </p>
            );
        });

        return (
            <div className="carousel carousel-slider center" id="carousel">
                {items}
            </div>
        );
    }
    render() {
        if (!storage.car) {
            return <Redirect to="/" />
        }
        return (
            <div className="row">
                <div className="col s12 m8 l9" id="divDetails">

                    {this.renderCarousel()}
                    {this.createPagination()}

                    <div className="divider"></div>

                    <h4 class="center">{storage.car.name}</h4>

                    <div class="card" id="descriptionCard">
                        <div class="card-content">
                            <span class="card-title">Beschreibung</span>
                            <p>{storage.car.description}</p>
                        </div>

                    </div>

                    <div class="card" id="informationCard">
                        <div class="card-content">
                            <span class="card-title">Datenblatt</span>
                            <div className="row">
                                <div className="col s4 l3">
                                    <strong>Leistung</strong>
                                </div>
                                <div className="col s8 l9">
                                    <p>{storage.car.power}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4 l3">
                                    <strong>Alter</strong>
                                </div>
                                <div className="col s8 l9">
                                    <p>{storage.car.age}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col 12 m4 l3" id="calendar">
                    <Calendar />
                </div>
            </div>
        )
    }
}

export default Details;