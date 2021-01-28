import React, { Component } from 'react';

//import BranchNameChild from './BranchNameChild';

class BonusPaymentSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchList: [],
            // startDate: undefined,
            page: 1,
            // pageNum: 0,
            // area: '', 


        }
    }
    addBranchfun(e) {
        e.preventDefault();
        var data = { branch: this.state.branchName, location: this.state.location }
        const arr = this.state.branchList;
        arr.push(data)
        this.setState({ branchList: arr });
    }

    removeBranch(i) {
        const arr = this.state.branchList;
        console.log(i)

        arr.splice(i, 1)
        this.setState({ branchList: arr })
    }

    setStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        var newData = this.state.branchList;
        var baseAppUrl = window.baseAppUrl;
        let per_page = 15; //window.per_page;
        const pages = newData && Math.ceil(this.state.branchList.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;


        return (
            <div className="container" >
                <div className="well">
                    <form>
                        <fieldset>

                            <div className="form-search form-group">
                                <div className="col-md-12">
                                    <div id="legend">
                                        <legend>BONUS PAYMENT SHEET</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="col-md-6">
                                                <div className="input-group svX3">
                                                    <label className="input-group-addon imagetype-width" id="status-addon">Fiscal Year</label>
                                                    <select className="form-control" name="location" id="location" onChange={this.handleChange.bind(this)}>
                                                        <option value="">Select Year</option>
                                                        <option value="1001">1001</option>
                                                        <option value="1002">1002</option>
                                                        <option value="1003">1003</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input-group svX3">
                                                <label className="input-group-addon imagetype-width" id="status-addon">Select Date</label>
                                                <select className="form-control" name="level" id="level" onChange={this.handleChange.bind(this)}>
                                                    <option value="">Select Date</option>
                                                    <option value="ASSISTANT SUPERVISOR">Dec 1</option>
                                                    <option value="CEO">Dec 2</option>
                                                    <option value="DRIVER">Dec 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="input-group svX3">
                                                <label className="input-group-addon imagetype-width" id="lastName-addon">Bonus Amount</label>
                                                <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="row"></div>
                            </div>


                            <div className="form-group">
                                <div className="col-md-12"><button id="submit" className="btn btn-primary">LOAD SHEET</button> &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;
                                    <button id="cancel" className="btn btn-primary">DELETE ROW</button>  &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;
                                    <button id="cancel" className="btn btn-primary">SAVE SHEET</button> &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;
                                   <a class="btn btn-primary" href="http://localhost:3000/">
                                        <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a> &nbsp;  &nbsp;&nbsp;




                                </div>
                                <div className="row"></div>
                            </div>
                        </fieldset>
                    </form>
                    <div className="well" >

                        <table id="userTable" className="table table-bordered table-stripped results">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Level</th>
                                    <th>Join Date AD</th>
                                    <th>Service Period</th>
                                    <th>Basic Salary</th>
                                    <th>Eligible(M)</th>
                                    <th>Total Salary</th>
                                    <th>Bonus Amount</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        // return (
                                        // <BranchNameChild
                                        //     key={idx}
                                        //     index={idx}
                                        //     id={idx}
                                        //     ram={item.branch}
                                        //     shyam={item.location}

                                        //     deleteUserBoard={this.removeBranch.bind(this)}
                                        // />
                                        //)
                                    }
                                }) : null}

                            </tbody>
                        </table>

                    </div>


                </div></div >)

    }
}

export default BonusPaymentSheet;