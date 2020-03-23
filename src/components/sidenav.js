import React from "react";
import M from 'materialize-css'

class Sidenav extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const sidenavInstance = M.Sidenav.init(document.getElementById("slide-out"), {});
        const collapsibleInstances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
        this.setState({
            loaded: true,
            sidenav: sidenavInstance,
            collapsible: collapsibleInstances,
        })
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.loaded) {
            this.state.sidenav.open();
        }
    }

    render() {
        return (
            <div id="divFilter">


                <ul id="slide-out" className="sidenav">

                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <a href="#!" className="collapsible-header ">Sortierung<i className="material-icons">arrow_drop_down</i></a>
                                <div className="collapsible-body">
                                    <ul>
                                        <li><a href="#!">Preise aufsteigend</a></li>
                                        <li><a href="#!">Preise absteigend</a></li>
                                        <li><a href="#!">Alter aufsteigend</a></li>
                                        <li><a href="#!">Alter absteigend</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><div className="divider"></div></li>
                    <li >
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <a href="#!" className="collapsible-header">Marken<i className="material-icons">arrow_drop_down</i></a>
                                <div className="collapsible-body">
                                    <ul>
                                        <li>
                                            <label>
                                                
                                                <input type="checkbox" />
                                                <span>Volkswagen</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                            <input type="checkbox" />
                                                <span>Audi</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>


                <a href="#!" onClick={this.handleClick} className="valign-wrapper">Filter<i className="material-icons">menu</i></a>
            </div>
        )
    }
}

export default Sidenav