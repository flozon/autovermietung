import React from 'react'
import { Link } from 'react-router-dom'

class Cards extends React.Component {
    
    render() {
        return (
            <div className="row">
                <div className="col s6 m4 l3">
                    <Link to="/details">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://i.auto-bild.de/mdb/extra_large/43/touran-73f.png" alt="Bild" />

                        </div>
                        <div className="card-action center">
                            <span className="card-title">VW Touran</span>

                        </div>


                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Cards