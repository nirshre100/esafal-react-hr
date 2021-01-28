import React, { Component } from 'react';

//import BranchNameChild from './BranchNameChild';

class TravelEntry extends Component {
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
                                        <legend>EMPLOYEE TRAVEL ENTRY</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="col-md-6">
                                                <div className="input-group svX3">
                                                    <label className="input-group-addon imagetype-width" id="status-addon">ID</label>
                                                    <select className="form-control" name="location" id="location" onChange={this.handleChange.bind(this)}>
                                                        <option value="">Select ID</option>
                                                        <option value="1001">1001</option>
                                                        <option value="1002">1002</option>
                                                        <option value="1003">1003</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input-group svX3">
                                                <label className="input-group-addon imagetype-width" id="status-addon">NAME</label>
                                                <select className="form-control" name="level" id="level" onChange={this.handleChange.bind(this)}>
                                                    <option value="">Select Name</option>
                                                    <option value="ASSISTANT SUPERVISOR">Samir</option>
                                                    <option value="CEO">Laxmi</option>
                                                    <option value="DRIVER">Niraj</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div className="col-md-3">
                                            <div className="input-group svX3">
                                                <label className="input-group-addon imagetype-width" id="lastName-addon">Date From</label>
                                                <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                            </div>

                                        </div>

                                        <div className="col-md-3">
                                            <div className="input-group svX3">
                                                <label className="input-group-addon imagetype-width" id="lastName-addon">Date To</label>
                                                <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                            </div>

                                        </div>


                                        <div className="col-md-3">
                                            <div className="input-group svX2">
                                                <label className="input-group-addon imagetype-width" id="lastName-addon">Place To</label>
                                                <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />

                                            </div>

                                        </div>


                                    </div>

                                    <div className="col-md-13">
                                        <div className="input-group svX3">
                                            <label className="input-group-addon imagetype-width" id="lastName-addon">Purpose</label>
                                            <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                    </form>
                    <div className="well" >
                    </div>
                    <div className="form-group">
                        <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.addBranchfun.bind(this)}>Save</button> &nbsp; &nbsp;
                        <a class="btn btn-primary" href="http://localhost:3000/">
                                <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>

                        </div>
                        <div className="row"></div>
                    </div>

                </div></div >)

    }
}

export default TravelEntry;