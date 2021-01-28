import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class OtherNewRegistration extends Component {
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
            <div className="container" >
                <div className="well">
                    <fieldset>
                        <div className="form-search form-group">
                            <div className="col-md-12">
                                <div id="legend">
                                    <legend> OTHERE EMPLOYEE REGISTRATION</legend>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="input-group svX1">
                                            <label className="input-group-addon imagetype-width" id="firstName-addon">ID</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">100001</option>
                                                <option value="hello">100002</option>
                                                <option value="hello">100003</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="input-group svX2">
                                            <label className="input-group-addon imagetype-width" id="lastName-addon">Name</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">LAXMI</option>
                                                <option value="hello">NIRAJ</option>
                                                <option value="hello">SAMIR</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Branch</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">KATHMANDU</option>
                                                <option value="hello">JHAPA</option>
                                                <option value="hello">JANAKPUR</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Post</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">ACCOUNTANT</option>
                                                <option value="hello">CEO</option>
                                                <option value="hello">DRIVER</option>
                                            </select> </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Level</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">LEVEL-1</option>
                                                <option value="hello">LEVEL-2</option>
                                                <option value="hello">LEVEL-3</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="panel panel-default" />

                                    <div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Join Date AD</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Join Date BS</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Expire Date AD</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Expire Date BS</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Department</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>



                                    <div className="col-md-6">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Shift</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">MORNING</option>
                                                <option value="hello">NIGHT</option>
                                                <option value="hello">NORMAL</option>
                                            </select>
                                        </div>
                                    </div>

                                    <h4>.</h4>
                                    <div className="panel panel-default" />

                                    <h4>CONTRACT TYPE OPTION</h4>
                                    <div className="panel panel-default" />
                                    <div className="col-md-10">
                                        <div className="input-group svX3">

                                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">ENTRANSHIP</label>
                                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">MANAGEMENT TRAINEE</label>

                                        </div>
                                    </div>

                                    <h4>.</h4>

                                    <div className="panel panel-default" />
                                    <h4>REGULAR STAFF FACILITIES OPTION</h4>
                                    <div className="panel panel-default" />
                                    <div className="col-md-10">
                                        <div className="input-group svX3">
                                            <label className="radio-inline" id="lastName-addon">BASIC SALARY</label>
                                            <input className="radio-inline" type="text" id="lastName" name="lastName" />
                                            <input className="radio-inline" type="checkbox" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">Leave Facility</label>
                                        </div>
                                    </div>


                                </div>



                                <div className="col-md-8">
                                </div>
                            </div>
                            <div className="row"></div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <button id="save" className="btn btn-primary">SAVE</button> &nbsp; &nbsp;
                                <a class="btn btn-primary" href="http://localhost:3000/">
                                    <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>


                            </div>
                        </div>


                    </fieldset>

                </div></div >)

    }
}

export default OtherNewRegistration;