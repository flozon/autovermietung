import React from "react";
import M from 'materialize-css'
import storage from './storage';

class Details extends React.Component {
    componentDidMount() {
        var carouselInstance = M.Carousel.init(document.querySelectorAll('.carousel'), {fullWidth: true});
        this.setState({
            carousel: carouselInstance
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l9">
                    <div class="carousel carousel-slider center">
                        <a class="carousel-item" href="#one!"><img className="imageSlider responsive-img" src="https://i.auto-bild.de/mdb/extra_large/43/touran-73f.png" /></a>
                        <a class="carousel-item" href="#two!"><img className="imageSlider responsive-img" src="https://www.adac.de/_ext/itr/tests/GWInfo/GW0373_VW_Touran_ab_2015_Diesel.jpg" /></a>
                        <a class="carousel-item" href="#three!"><img className="imageSlider responsive-img" src="https://news.meinauto.de/vw_touran_2015_ausen_vorne.jpg" /></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Details;