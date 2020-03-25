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
            <div>


                <ul id="slide-out" className="sidenav">

                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <p className="collapsible-header a">Sortierung<i className="material-icons">arrow_drop_down</i></p>
                                <div className="collapsible-body">
                                    <ul>
                                        <li><p class="a">Preise aufsteigend</p></li>
                                        <li><p class="a">Preise absteigend</p></li>
                                        <li><p class="a">Alter aufsteigend</p></li>
                                        <li><p class="a">Alter absteigend</p></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><div className="divider"></div></li>
                    <li >
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <p className="collapsible-header a">Marken<i className="material-icons">arrow_drop_down</i></p>
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

                <div className="center">
                    <a href="#!" onClick={this.handleClick} ><i className="material-icons medium black-text" id="filter">menu</i></a>
                </div>

            </div>
        )
    }
}

export default Sidenav