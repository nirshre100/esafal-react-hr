import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class MemberEditfrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: undefined
        }
    }


    setStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    render() {

        return (
            <div className="well">
                <fieldset>
                    <div className="form-search form-group">
                        <div className="col-md-12">
                            <div id="legend">
                                <legend>User Search</legend>

                            </div>
                            <div className="row">

                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Emp. Code</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="input-group svX1">
                                        <label className="input-group-addon imagetype-width" id="firstName-addon">First Name</label>
                                        <input className="form-control" type="text" id="firstName" name="firstName" />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Mid.Name</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Last Name</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-group svX3">
                                        <label className="input-group-addon imagetype-width" id="email-addon">Email</label>
                                        <input className="form-control" type="text" id="email" name="email" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Phone No.</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Address</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Email</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">DOB</label>
                                        <DatePicker placeholderText="DD/MM/YYYY" selected={this.state.startDate} onChange={this.setStartDate.bind(this)} name="startDate" isClearable={true} />

                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Gender</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />

                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group svX2">
                                        <label className="input-group-addon imagetype-width" id="lastName-addon">Employe Type</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                </div>

                            </div>
                            <div className="row"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <button id="submit" onClick={() => this.searchUser()}
                                className="btn btn-primary">Search</button>
                            <button id="cancel" className="btn cancel" onClick={() => this.cancelUser()}>Cancel</button>
                        </div>
                    </div>
                </fieldset>

            </div>
        )

    }
}

export default MemberEditfrom;