import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class RemunerationTaxParameter extends Component {
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
                                    <legend>Remuneration Tax Parameter</legend>
                                </div>
                                <h4><u>FISCAL YEAR</u></h4>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="input-group svX1">
                                            <label className="input-group-addon imagetype-width" id="firstName-addon">Fiscal Year</label>
                                            <input className="form-control" type="text" id="firstName" name="firstName" />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group svX2">
                                            <label className="input-group-addon imagetype-width" id="lastName-addon">Start Date</label>
                                            <input className="form-control" type="text" id="lastName" name="lastName" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">End Date</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div>
                                        <h4><u>SERCHARGE TAX LIMIT</u></h4>

                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Limit for Sercharge Tax</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Sercharge Tax Rate</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Non-Resident Tax Rate</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <h4><u>STATUS EXEMPTION LIMIT</u></h4>


                                    <div className="col-md-12">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Married</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Unmarried</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>



                                    <div className="col-md-12">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Social Security Tax Rate</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <h4><u>SET FIRST LIMIT</u></h4>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Married</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Unmarried</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Tax Rate</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <h4><u>SET SECOND LIMIT</u></h4>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Married</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Unmarried</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Tax Rate</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>
                                    <h4><u>OTHER EXEMPTION LIMIT</u></h4>


                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Retirement Fund</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Life Insurance</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Medical Insurance</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="email-addon">Female Exemption</label>
                                            <input className="form-control" type="drop-down" id="email" name="email" />
                                        </div>
                                    </div>



                                </div>
                                <div className="row"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><button id="submit" className="btn btn-primary">New</button> &nbsp; &nbsp;
                                <button id="edit" className="btn btn-primary">Edit</button> &nbsp; &nbsp;
                                <button id="save" className="btn btn-primary">Save</button> &nbsp; &nbsp;
                                <a class="btn btn-primary" href="http://localhost:3000/">
                                    <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>


                            </div>
                        </div>


                    </fieldset>

                </div></div>)

    }
}

export default RemunerationTaxParameter;