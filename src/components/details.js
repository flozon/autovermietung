import React from "react";
import M from 'materialize-css'
import axios from 'axios';

class Details extends React.Component {
    async componentDidMount() {
        var carouselInstance = M.Carousel.init(document.querySelectorAll('.carousel'), { fullWidth: true });
        this.setState({
            carousel: carouselInstance
        });
        let res = await axios.post('http://localhost:5000/cars/add', { name: "blabla" });
        console.log(res.data);
        res = await axios.get('http://localhost:5000/cars/');
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
                </div>

            </div>
        )
    }
}

export default Details;