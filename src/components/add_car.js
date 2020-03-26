import React from 'react';
import axios from 'axios';

class Admin_Page extends React.Component {
    constructor() {
        super();
        this.handleChanges = this.handleChanges.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {

            add_name: "",
            add_description: "",
            add_datasheet_power: "",
            add_datasheet_age: ""

        }
    }

    handleChanges(e) {
        const item = e.target;
        if (item.type === "file") {
            this.setState({
                [item.id]: [...item.files]
            })
        } else {
            this.setState({

                [item.id]: item.value

            })
        }
    }

    getBinary(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsBinaryString(file);
        })
    }

    async submit() {
        const data = new FormData();
        for (let prop in this.state) {
            if (Array.isArray(this.state[prop])) {
                this.state[prop].forEach(ele => {
                    data.append(prop, ele);
                });
            } else {
                data.append(prop, this.state[prop]);
            }
        }
        /*console.log(data);
        //data.append('add_main_picture', this.state.add_main_picture[0])
        /*const files = { additional: [] };

        files.main = await this.getBinary(this.state.add_main_picture[0]);
        for (let i = 0; i < this.state.add_additional_picture.length; i++) {
            files.additional[i] = await this.getBinary(this.state.add_additional_picture[i]);
        }*/

        let res = await axios.post("http://localhost:5000/cars/add", data);
        console.log(res);
    }

    render() {
        return (
            <div>
                <div class="container hide-on-small">
                    <h5 className="center">Neues Auto anlegen</h5>
                    <form>
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Bildupload</span>
                                <div class="file-field input-field " id="fileInput">
                                    <p>Hauptbild</p>
                                    <div class="btn">
                                        <span>File</span>
                                        <input id="add_main_picture" type="file" onChange={this.handleChanges} />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                </div>
                                <div class="file-field input-field " id="fileInput">
                                    <p>Weitere Bilder</p>
                                    <div class="btn">
                                        <span>File</span>
                                        <input id="add_additional_picture" type="file" multiple onChange={this.handleChanges} />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Beschreibung</span>
                                <div class="input-field">
                                    <input id="add_name" type="text" class="validate" value={this.state.add_name} onChange={this.handleChanges} />
                                    <label for="add_name">Name</label>
                                </div>
                                <div class="input-field ">
                                    <textarea id="add_description" class="materialize-textarea" value={this.state.add_description} onChange={this.handleChanges}></textarea>
                                    <label for="add_description">Beschreibung</label>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Datenblatt</span>
                                <div class="input-field">
                                    <input id="add_datasheet_power" type="text" class="validate" value={this.state.add_datasheet_power} onChange={this.handleChanges} />
                                    <label for="add_datasheet_power">Leistung</label>
                                </div>
                                <div class="input-field">
                                    <input id="add_datasheet_age" type="text" class="validate" value={this.state.add_datasheet_age} onChange={this.handleChanges} />
                                    <label for="add_datasheet_age">Alter</label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p class=" btn-large" onClick={this.submit}>Speichern</p>
                </div>
                <h4 className="hide-on-med-and-up">Diese Seite ist nur am Desktop aufrufbar</h4>
            </div>

        );
    }
}

export default Admin_Page;