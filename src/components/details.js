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
            numberImages: 3
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
            const action = parseInt(e.target.title);
            if (action === -1) {
                if (storage.currentPage === 0) {
                    storage.currentPage = this.state.numberImages - 1;
                } else {
                    storage.currentPage--;
                }
            } else if (action === -2) {
                if (storage.currentPage === this.state.numberImages - 1) {
                    storage.currentPage = 0;
                } else {
                    storage.currentPage++;
                }
            } else {
                storage.currentPage = action;
            }

            this.state.carousel.set(storage.currentPage);
        }

    }

    handleHighlight(index) {

        if (index === storage.currentPage) {
            return "active";
        } else {
            return "";
        }
    }

    createPagination(number) {
        console.log(storage.currentPage);
        let pages = [];
        for (let i = 0; i < number; i++) {
            pages.push(<li class={this.handleHighlight(i)}><a href="#!" onClick={this.handlePages} title={i}>{i + 1}</a></li>)
        }
        return (
            <ul class="pagination center">
                <li class=""><a href="#!"><i class="material-icons" onClick={this.handlePages} title={-1}>chevron_left</i></a></li>
                {pages}
                <li class=""><a href="#!"><i class="material-icons" onClick={this.handlePages} title={-2}>chevron_right</i></a></li>
            </ul>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l9" id="divDetails">
                    <div className="carousel carousel-slider center" id="carousel">
                        <a className="carousel-item" href="#one!">
                            <img className="imageSlider responsive-img" src="https://i.auto-bild.de/mdb/extra_large/43/touran-73f.png" alt="bild1" />
                        </a>
                        <a className="carousel-item" href="#two!">
                            <img className="imageSlider responsive-img" src="https://www.adac.de/_ext/itr/tests/GWInfo/GW0373_VW_Touran_ab_2015_Diesel.jpg" alt="bild2" />
                        </a>
                        <a className="carousel-item" href="#three!">
                            <img className="imageSlider responsive-img" src="https://news.meinauto.de/vw_touran_2015_ausen_vorne.jpg" alt="bild3" />
                        </a>
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