import React from "react";
import M from 'materialize-css'
import axios from 'axios';
import Calendar from './calendar'
import storage from './storage'

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            numberImages: 3,
            currentImage: 0
        }
        this.handlePages = this.handlePages.bind(this);
    }

    async componentDidMount() {
        var carouselInstance = M.Carousel.init(document.getElementById("carousel"), { fullWidth: true });
        this.setState({
            loaded: true,
            carousel: carouselInstance
        });
        /*let res = await axios.post('http://localhost:5000/cars/add', { name: "blabla" });
        console.log(res.data);*/
        let res = await axios.get('http://localhost:5000/cars/');
        console.log(res.data);
    }

    handlePages(e) {
        if (this.state.loaded) {
            const action = parseInt(e.target.id);
            let newImage;
            switch (action) {
                case -1:
                    if (this.state.currentImage === 0) {
                        newImage = this.state.numberImages - 1;
                    } else {
                        newImage = this.state.currentImage - 1;
                    }
                    break;
                case -2:
                    if (this.state.currentImage === this.state.numberImages - 1) {
                        newImage = 0;
                    } else {
                        newImage = this.state.currentImage + 1;
                    }
                    break;
                default: newImage = action;
            }
            
            this.setState({currentImage: newImage})
            
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

    createPagination(number) {
        let pages = [];
        for (let i = 0; i < number; i++) {
            pages.push(<li class={this.handleHighlight(i)}><p className="a" onClick={this.handlePages} id={i}>{i + 1}</p></li>)
        }
        return (
            <ul class="pagination center">
                <li class=""><p className="a"><i class="material-icons" onClick={this.handlePages} id={-1}>chevron_left</i></p></li>
                {pages}
                <li class=""><p className="a"><i class="material-icons" onClick={this.handlePages} id={-2}>chevron_right</i></p></li>
            </ul>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l9" id="divDetails">
                    <div className="carousel carousel-slider center" id="carousel">
                        <p className="carousel-item" href="#one!">
                            <img className="imageSlider responsive-img" src="https://i.auto-bild.de/mdb/extra_large/43/touran-73f.png" alt="bild1" />
                        </p>
                        <p className="carousel-item" href="#two!">
                            <img className="imageSlider responsive-img" src="https://www.adac.de/_ext/itr/tests/GWInfo/GW0373_VW_Touran_ab_2015_Diesel.jpg" alt="bild2" />
                        </p>
                        <p className="carousel-item" href="#three!">
                            <img className="imageSlider responsive-img" src="https://news.meinauto.de/vw_touran_2015_ausen_vorne.jpg" alt="bild3" />
                        </p>
                    </div>

                    {this.createPagination(this.state.numberImages)}

                    <div className="divider"></div>

                    <h4 class="center">VW Touran</h4>

                    <div class="card" id="descriptionCard">
                        <div class="card-content">
                            <span class="card-title">Beschreibung</span>
                            <p>blablablablablablablablalbalbalblablabl</p>
                        </div>

                    </div>

                    <div class="card" id="informationCard">
                        <div class="card-content">
                            <span class="card-title">Datenblatt</span>
                            <div className="row">
                                <div className="col s4 l3">
                                    <strong>Preis</strong>
                                </div>
                                <div className="col s8 l9">
                                    <p>120 Euro/Tag</p>
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