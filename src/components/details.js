import React from "react";
import M from 'materialize-css'
import axios from 'axios';
import Calendar from './calendar'

class Details extends React.Component {
    async componentDidMount() {
        var carouselInstance = M.Carousel.init(document.querySelectorAll('.carousel'), { fullWidth: true });
        this.setState({
            carousel: carouselInstance
        });
        /*let res = await axios.post('http://localhost:5000/cars/add', { name: "blabla" });
        console.log(res.data);*/
        let res = await axios.get('http://localhost:5000/cars/');
        console.log(res.data);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l9">
                    <div className="carousel carousel-slider center">
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

                    <ul class="pagination center">
                        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                        <li class="active"><a href="#!">1</a></li>
                        <li class="waves-effect"><a href="#!">2</a></li>
                        <li class="waves-effect"><a href="#!">3</a></li>
                        <li class="waves-effect"><a href="#!">4</a></li>
                        <li class="waves-effect"><a href="#!">5</a></li>
                        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                    
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
                <div className="col 12 m4 l3">
                    <Calendar />
                </div>
            </div>
        )
    }
}

export default Details;