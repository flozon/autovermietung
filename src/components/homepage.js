import React from "react";
import Sidenav from "./sidenav";
import Cards from './cards'

class Homepage extends React.Component {
   
    render() {
        return (
            <div>
                <div className="row" id="searchLine">
                    <div className="col s2 m2 l1 right" >
                        <Sidenav />
                    </div>
                    <div className="col s10 m5 l3 right">
                        <div className="input-field " id="searchField">
                            <i className="material-icons prefix small">search</i>
                            <input placeholder="Suche" id="first_name" type="text" className="validate " />
                        </div>
                    </div>

                </div>
                <div className="divider"></div>
                <Cards />
            </div>

        );
    }
}

export default Homepage;