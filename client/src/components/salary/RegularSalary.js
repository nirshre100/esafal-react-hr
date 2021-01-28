import React, { Component } from 'react';

//import BranchNameChild from './BranchNameChild';

class RegularSalary extends Component {
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
                                        <legend>SALARY CALCULATION SHEET</legend>
                                    </div>

                                    <h4>MONTH TYPE</h4>
                                    <div className="panel panel-default" />
                                    <div>
                                        <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                        <label className="radio-inline" id="lastName-addon">ENGLISH</label>
                                        <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                        <label className="radio-inline" id="lastName-addon">NEPALI</label>


                                    </div>
                                    <div className="row">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="status-addon">Month Name</label>
                                            <select className="form-control" name="level" id="level" onChange={this.handleChange.bind(this)}>
                                                <option value="">Select Month</option>
                                                <option value="ASSISTANT SUPERVISOR">Jan</option>
                                                <option value="CEO">Feb</option>
                                                <option value="DRIVER">March</option>
                                            </select>

                                        </div>


                                    </div>
                                </div>


                                <div className="row"></div>
                            </div>


                            <div className="form-group">

                                <div className="col-md-12"><button id="LoadSalary" className="btn btn-primary">LOAD SALARY </button> &nbsp; &nbsp;
                                    <button id="LoadTds" className="btn btn-primary">LOAD TDS AMOUNT</button> &nbsp; &nbsp;
                                    <button id="DeleteRow" className="btn btn-primary">DELETE ROW</button> &nbsp; &nbsp;
                                    <button id="Save" className="btn btn-primary">SAVE</button> &nbsp; &nbsp;
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
                                    <th>Emp. Name</th>
                                    <th>BASIC</th>
                                    <th>All.1</th>
                                    <th>All.2</th>
                                    <th>All.3</th>
                                    <th>PF.Amt</th>
                                    <th>RF.Amt</th>
                                    <th>Tot. Salary</th>
                                    <th>Cont.PF</th>
                                    <th>Cont.RF</th>
                                    <th>Cont.</th>
                                    <th>Tot. RF</th>
                                    <th>A. Ded.</th>
                                    <th>O. Ded.</th>
                                    <th>TDS Amt.</th>
                                    <th>Deducation</th>
                                    <th>Net Amount</th>



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

export default RegularSalary;