import React from "react";
import Sidenav from "./sidenav";
import Cards from './cards'

class Homepage extends React.Component {
   
    render() {
        return (
            <div>
                <div className="row" id="searchLine">
                    <div className="col s4 m3 l2 right" >
                        <Sidenav />
                    </div>
                    <div className="col s8 m5 l3 right">
                        <div class="input-field ">
                            <i class="material-icons prefix small">search</i>
                            <input placeholder="Suche" id="first_name" type="text" class="validate " />
                        </div>
                    </div>

                </div>
                <div className="divider"></div>
                <Cards {...this.props}/>
            </div>

        );
    }
}

export default Homepage;