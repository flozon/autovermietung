import React from "react";
import M from 'materialize-css'

class Dropdown extends React.Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {});
    }

    render() {
        return (
            <div>
                <ul id="dropdownFilter" class="dropdown-content">
                    <li>
                        <span class="center">Preis</span>
                        <input placeholder="Obergrenze" id="first_name" type="text" class=" center validate"></input>
                    </li>
                    <li><a href="#!">Marke</a></li>
                    <li><a href="#!">Farbe</a></li>
                </ul>
                <div class="dropdown-trigger" data-target="dropdownFilter">Filter<i class="material-icons right">arrow_drop_down</i></div>
            </div>
        )
    }
}

export default Dropdown