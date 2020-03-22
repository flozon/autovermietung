import React from 'react'
import M from 'materialize-css'

class Cards extends React.Component {
 
    render() {
        return (
            <div class="row">
                <div class="col s6 m4 l3">
                    <div class="card" onClick={this.props.handleState}>
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