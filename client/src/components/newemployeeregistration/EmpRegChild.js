import React, { Component } from 'react';

class EmpRegChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: undefined
        }
    }

    render() {

        return (
            <div>
                <h3>New Employee Registration</h3>
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

                    <h4>CONTRACT TYPE OPTION</h4>
                    <div className="col-md-10">
                        <div className="input-group svX3">
                            <label className="radio-inline" id="lastName-addon">REGULAR</label>
                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                            <label className="radio-inline" id="lastName-addon">PARTTIME</label>
                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                            <label className="radio-inline" id="lastName-addon">DAILY WAGES TAXABLE</label>
                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                            <label className="radio-inline" id="lastName-addon">DAILY WAGES NON-TAXABLE</label>
                            <input className="radio-inline" type="radio" id="lastName" name="lastName" />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EmpRegChild;