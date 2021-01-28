import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import EmpRegChild from './EmpRegChild';
import RegularStaffChild from './RegularStaffChild';

class NewEmployeeRegistration extends Component {
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
                    <Tabs>
                        <TabList>
                            <Tab>EMPLOYEE REGISTRATION</Tab>
                            <Tab>REGULAR STAFF</Tab>
                            <Tab>PARTTIME FACILITIES</Tab>
                            <Tab>DAILY WAGES FACILITIES</Tab>
                            <Tab>RETIREMENT FUND</Tab>
                            <Tab>OVER TIME</Tab>
                        </TabList>
                        <TabPanel>
                         <EmpRegChild/>
                        </TabPanel>
                        <TabPanel>
                        <RegularStaffChild/>
                        </TabPanel>
                        <TabPanel>
                            PARTTIME FACILITIES OPTION
                       
                            <label className="input-group-addon imagetype-width" id="email-addon">Salary Amount</label>
                            <input className="form-control" type="text" id="email" name="email" />

                        </TabPanel>


                        <TabPanel>

                            <h4>DAILY WAGES FACILITIES OPTION</h4>
                            <div className="row">
                            <div className="col-md-5">
                                <div className="input-group svX3">
                                    <label className="input-group-addon imagetype-width" id="email-addon">Remuneration</label>
                                    <input className="form-control" type="drop-down" id="email" name="email" />

                                </div>
                            </div>
                            <label>Per Day</label>

                            <div className="col-md-5">
                                <div className="input-group svX1">
                                    <label className="input-group-addon imagetype-width" id="firstName-addon">Working Hour</label>
                                    <input className="form-control" type="text" id="firstName" name="firstName" />
                                </div>
                            </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            
                            
                                <h4>RETIREMENT FUND CONTRIBUTION OPTION</h4>
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="input-group svX3">
                                        <label className="input-group-addon imagetype-width" id="email-addon">Provident Fund</label>
                                        <input className="form-control" type="text" id="email" name="email" />
                                        <input className="" type="checkbox" id="email" name="email" />
                                        <label className="" id="email-addon">Amt. Per Month</label>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-group svX3">

                                        <label className="input-group-addon imagetype-width" id="email-addon">RF/Gratury Fund</label>
                                        <input className="form-control" type="text" id="email" name="email" />

                                        <input className="" type="checkbox" id="email" name="email" />
                                        <label className="" id="email-addon">Rs. Per Month</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-group svX3">

                                        <label className="input-group-addon imagetype-width" id="email-addon">CIT</label>
                                        <input className="form-control" type="text" id="email" name="email" />

                                        <input className="" type="checkbox" id="email" name="email" />
                                        <label className="" id="email-addon">Amt. Per Month</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-group svX3">

                                        <label className="input-group-addon imagetype-width" id="email-addon">Insurance Premium</label>
                                        <input className="form-control" type="text" id="email" name="email" />

                                        <input className="" type="checkbox" id="email" name="email" />
                                        <label className="" id="email-addon">Amt. Per Year</label>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="input-group svX3">

                                        <label className="input-group-addon imagetype-width" id="email-addon">Medical Insurance</label>
                                        <input className="form-control" type="text" id="email" name="email" />

                                        <input className="" type="checkbox" id="email" name="email" />
                                        <label className="" id="email-addon">Amt. Per Year</label>
                                    </div>
                                </div>
                              </div>
                          
                        </TabPanel>

                        <TabPanel>
                            <h4>OVER TIME OPTION</h4>
                            <div className="row">
                            <div className="col-md-5">
                                <div className="input-group svX3">
                                    <label className="input-group-addon imagetype-width" id="email-addon">Remuneration</label>
                                    <input className="form-control" type="drop-down" id="email" name="email" />

                                </div>
                            </div>

                            <label>Per Day</label>
                            <div className="col-md-5">
                                <div className="input-group svX1">
                                    <label className="input-group-addon imagetype-width" id="firstName-addon">Maximum Hour</label>
                                    <input className="form-control" type="text" id="firstName" name="firstName" />
                                </div>
                            </div>

                            <div className="panel panel-default" />
                            <div className="panel panel-default" />
                            <div className="panel panel-default" />
                            <div className="col-md-4">
                                <div className="input-group svX1">
                                    <label className="input-group-addon imagetype-width" id="firstName-addon">Total Income Per Month</label>
                                    <input className="form-control" type="text" id="firstName" name="firstName" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group svX2">
                                    <label className="input-group-addon imagetype-width" id="lastName-addon">Total RF Contribution Per Month</label>
                                    <input className="form-control" type="text" id="lastName" name="lastName" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group svX2">
                                    <label className="input-group-addon imagetype-width" id="lastName-addon">Net Salary Per Month</label>
                                    <input className="form-control" type="text" id="lastName" name="lastName" />
                                </div>
                            </div>
                        </div>
                        </TabPanel>

                    </Tabs>
                    <fieldset>
                      <br/>
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

export default NewEmployeeRegistration;