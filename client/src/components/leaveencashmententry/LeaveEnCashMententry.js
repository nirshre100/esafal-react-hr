import React, { Component } from 'react';

//import BranchNameChild from './BranchNameChild';

class LeaveEnCashMententry extends Component {
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
                                        <legend>LEAVE ENCASHMENT ENTRY</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="col-md-6">
                                                <div className="input-group svX3">
                                                    <label className="input-group-addon imagetype-width" id="status-addon">Fiscal Year</label>
                                                    <select className="form-control" name="location" id="location" onChange={this.handleChange.bind(this)}>
                                                        <option value="">Select Month</option>
                                                        <option value="1001">jan</option>
                                                        <option value="1002">feb</option>
                                                        <option value="1003">march</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="input-group svX3">
                                                    <label className="input-group-addon imagetype-width" id="lastName-addon">Date</label>
                                                    <input className="form-control" type="text" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row"></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><button id="submit" className="btn btn-primary">LOAD SHEET</button> &nbsp; &nbsp;
                                    <button id="cancel" className="btn btn-primary">DELETE ROW</button>&nbsp; &nbsp;&nbsp;
                                    <button id="cancel" className="btn btn-primary">SAVE</button>&nbsp; &nbsp; &nbsp;
                                    <a class="btn btn-primary" href="http://localhost:3000/">
                                        <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>


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
                                    <th>Leavel</th>
                                    <th>Branch Name</th>
                                    <th>Prev. Bal</th>
                                    <th>Curr. Bal </th>
                                    <th>Basic Salary</th>
                                    <th>Ent. Days</th>
                                    <th>Amount</th>
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
                    <h3>No. of Employee :</h3>
                </div></div >)

    }
}

export default LeaveEnCashMententry;