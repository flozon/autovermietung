import React from 'react'

class Cards extends React.Component {
    handleClick = () => {
        this.props.toCar(this.props.car);
    }

    render() {
        return (
            <div name={this.props.car._id} className="card a" onClick={this.handleClick}>
                <div className="card-image">
                    <img src={process.env.PUBLIC_URL + "/images/" + this.props.car.main_picture} alt="Bild" />
                </div>
                <div className="card-action center">
                    <span className="card-title">{this.props.car.name}</span>
                </div>
            </div>
        );
    }
}

export default Cards