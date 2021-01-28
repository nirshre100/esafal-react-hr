import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class GroupAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: undefined
        }
    }

    //hi 
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
                                    <legend> GROUP ATTENDANCE ENTRY</legend>
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

                                    <h4>BRANCH OPTION</h4>
                                    <div className="panel panel-default" />
                                    <div className="col-md-10">
                                        <div className="input-group svX3">

                                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">ALL BRANCH</label>

                                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                            <label className="radio-inline" id="lastName-addon">SELECT BRANCH</label>
                                            <label className="input-group-addon imagetype-width" id="firstName-addon">BRANCH NAME</label>
                                            <select className="form-control" name="status" id="status" >
                                                <option value="ALL">KATHMANDU</option>
                                                <option value="hello">BHAKATPUR</option>
                                                <option value="hello">LALITPUR</option>
                                            </select>

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
                                <button id="save" className="btn btn-primary">SHOW LIST</button> &nbsp; &nbsp;
                                <button id="close" className="btn btn-primary">CHECK ALL</button> &nbsp; &nbsp;
                                <button id="save" className="btn btn-primary">UNCHECK ALL</button> &nbsp; &nbsp;
                                <button id="save" className="btn btn-primary">SAVE</button>&nbsp; &nbsp;
                                <a class="btn btn-primary" href="http://localhost:3000/">
                                    <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>



                            </div>
                        </div>


                    </fieldset>

                </div></div >)

    }
}

export default GroupAttendance;