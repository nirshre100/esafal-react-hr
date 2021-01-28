import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class SingleAttendance extends Component {
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
                                    <legend> SINGLE ATTENDANCE ENTRY</legend>
                                </div>
                                <div className="row">

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
                                    <h4>&nbsp;</h4>
                                    <div className="panel panel-default" />

                                    <h4>ENTRY</h4>
                                    <div className="panel panel-default" />
                                    <div className="col-md-12">
                                        <div className="input-group svX3">

                                            <label className="input-group-addon imagetype-width" id="firstName-addon">Employee ID</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">004051723 - Saujanya Shahi </option>
                                                <option value="hello">004081705 - Gyan Bahadur Dangara Tharu</option>
                                                <option value="hello">006071930 - Sunil Krishna Karmacharya</option>
                                            </select>

                                            <label className="input-group-addon imagetype-width" id="firstName-addon">Employee Name</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">Saujanya Shahi-008061729 </option>
                                                <option value="hello">Gyan Bahadur Dangara Tharu-008061730</option>
                                                <option value="hello">Sunil Krishna Karmacharya-008061731</option>
                                            </select>


                                            <label className="input-group-addon imagetype-width" id="firstName-addon">Branch</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">KATHMANDU </option>
                                                <option value="hello">JHAPA</option>
                                                <option value="hello">LALITPUR</option>
                                            </select>
                                        </div>


                                        <div className="panel panel-default" />

                                        <label className="input-group-addon imagetype-width" id="firstName-addon">Shift</label>
                                        <select className="form-control" name="status" id="status" >
                                            <option value="ALL">Morning</option>
                                            <option value="hello">Day</option>
                                            <option value="hello">Normal</option>
                                        </select>

                                        <div className="panel panel-default" />

                                        <div className="input-group svX3">
                                            <label className="radio-inline" id="lastName-addon">Attend</label>
                                            <input className="radio-inline" type="checkbox" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">YES</label>


                                            <input className="radio-inline" type="checkbox" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">NO</label>

                                        </div>


                                        <div className="input-group svX3">
                                            <label className="radio-inline" id="lastName-addon">Late</label>
                                            <input className="radio-inline" type="checkbox" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">YES</label>


                                            <input className="radio-inline" type="checkbox" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">NO</label>

                                        </div>
                                        <div className="panel panel-default" />



                                        <div className="col-md-6">
                                            <div className="input-group svX3">

                                                <label className="input-group-addon imagetype-width" id="email-addon">IN Time</label>
                                                <select className="form-control" name="status" id="status" >
                                                    <option value="ALL">Select In Time </option>
                                                    <option value="hello">9:11 PM</option>

                                                </select>


                                                <label className="input-group-addon imagetype-width" id="email-addon">Out Time</label>
                                                <select className="form-control" name="status" id="status" >
                                                    <option value="ALL">Select Out Time </option>
                                                    <option value="hello">9:11 PM</option>

                                                </select>


                                            </div>

                                        </div>
                                    </div>



                                    <h4>&nbsp;</h4>

                                </div>

                                <div className="col-md-8">
                                </div>
                            </div>
                            <div className="row"></div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">

                                <button id="save" className="btn btn-primary">SAVE</button>   &nbsp; &nbsp;

                                <a class="btn btn-primary" href="http://localhost:3000/">
                                    <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>



                            </div>
                        </div>


                    </fieldset>

                </div></div >)

    }
}

export default SingleAttendance;