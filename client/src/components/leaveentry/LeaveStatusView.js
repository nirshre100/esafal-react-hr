import React, { Component } from 'react';

//import BranchNameChild from './BranchNameChild';

class LeaveEntry extends Component {
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

                            <div id="legend">
                                <legend>LEAVE STATUS VIEW</legend>

                                <div className="input-group svX3">
                                    <label className="input-group-addon imagetype-width" id="lastName-addon">Employee Name : </label>
                                    <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="input-group svX3">
                                    <label className="input-group-addon imagetype-width" id="lastName-addon">Fiscal Year : </label>
                                    <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                </div>

                            </div>


                        </fieldset>
                    </form>
                    <div className="well" >

                        <table id="userTable" className="table table-bordered table-stripped results">
                            <thead>
                                <tr>
                                    <th>LEAVE TYPE</th>
                                    <th>DAYS</th>
                                    <th>USED</th>
                                    <th>BALANCE</th>

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

export default LeaveEntry;