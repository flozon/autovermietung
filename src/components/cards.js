import React from 'react'
import { Redirect } from 'react-router-dom'

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            toCar: false
        }
        this.handleRedirect = this.handleRedirect.bind(this);
    }


    handleRedirect() {
        this.setState({
            toCar: true
        })
    }

    render() {
        if (this.state.toCar) {
            return <Redirect to='/details' />
        }

        return (
            <div class="row">
                <div class="col s6 m4 l3">
                    <div class="card" onClick={this.handleRedirect}>
                        <div class="card-image">
                            <img src="https://i.auto-bild.de/mdb/extra_large/43/touran-73f.png" alt="Bild" />

                        </div>
                        <div class="card-action center">
                            <span class="card-title">Card Title</span>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Cards