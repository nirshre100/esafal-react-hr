import React, { Component } from 'react';

import BranchNameChild from './BranchNameChild';

class BranchName extends Component {
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

    updateBranch(id, branch, location, index) {
        const arr = this.state.branchList;
        arr[index] = {
            //      id,
            branch: branch,
            location: location,

        }
        this.setState({ branchList: arr })
        this.setState({ msgEdit: [' Record ' + index + ' Updated  successfully '] });
        this.setState({ typeEdit: false });
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
                                        <legend>Create New Branch</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="input-group svX1">
                                                <label className="input-group-addon imagetype-width" id="firstName-addon">Branch Name</label>
                                                <input className="form-control" type="text" id="branchName" name="branchName" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="col-md-8">
                                                <div className="input-group svX3">
                                                    <label className="input-group-addon imagetype-width" id="status-addon">Location</label>
                                                    <select className="form-control" name="location" id="location" onChange={this.handleChange.bind(this)}>
                                                        <option value="">Select Location</option>
                                                        <option value="BIRTAMOD">BIRTAMOD</option>
                                                        <option value="DANG">DANG</option>
                                                        <option value="DILLIBAZAR">DILLIBAZAR</option>
                                                        <option value="HEAD OFFICE">HEAD OFFICE</option>
                                                        <option value="INDRACHOWK">INDRACHOWK</option>
                                                        <option value="ITAHARI">ITAHARI</option>

                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row"></div>
                                </div>
                            </div>  &nbsp;&nbsp;
                            <div className="form-group">

                                <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.addBranchfun.bind(this)}>Save</button> &nbsp; &nbsp;



                                <a class="btn btn-primary" href="http://localhost:3000/">
                                        <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>

                                </div>
                            </div>&nbsp;
                        </fieldset>
                    </form>
                    <div className="well" >

                        <table id="userTable" className="table table-bordered table-stripped results">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Branch Name</th>
                                    <th>Location</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        return (
                                            <BranchNameChild
                                                key={idx}
                                                index={idx}
                                                id={idx}
                                                branch={item.branch}
                                                location={item.location}

                                                deleteUserBoard={this.removeBranch.bind(this)}
                                                updateBranch={this.updateBranch.bind(this)}
                                            />
                                        )
                                    }
                                }) : null}

                            </tbody>
                        </table>

                    </div>

                </div></div >)

    }
}

export default BranchName;