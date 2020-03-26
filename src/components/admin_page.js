import React from 'react';
import {Link} from 'react-router-dom'

class Admin_Page extends React.Component {
    render() {
        return (
            <Link to="/add_car">
                <div class="card blue-grey darken-1 center">
                    <div class="card-content white-text">
                        <span class="card-title">Auto hinzufügen</span>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Admin_Page;