import React, { Component } from 'react';
import LeaveTypeChild from './LeaveTypeChild';


class CreateNewLeavetype extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaveTypeList: [],
            // startDate: undefined,
            page: 1,
            // pageNum: 0,
            // area: '', 
        }
    }

    addNewLeaveList(e) {
        e.preventDefault();
        //create new Leavetype variable------------------------------

        var data = { leavetype: this.state.leavet, leaveday: this.state.leaved }
        const arr = this.state.leaveTypeList;
        arr.push(data)
        this.setState({ addNewLeaveList: arr });
    }

    removeLeave(i) {
        const arr = this.state.leaveTypeList;
        console.log(i)
        arr.splice(i, 1)
        this.setState({ leaveTypeList: arr })
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    setStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    render() {

        var newData = this.state.addNewLeaveList;
        var baseAppUrl = window.baseAppUrl;
        let per_page = 15; //window.per_page;
        const pages = newData && Math.ceil(this.state.addNewLeaveList.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;



        return (
            <div className="container" >
                <div className="well">
                    <form onSubmit={this.addNewLeaveList.bind(this)}>
                        <fieldset>
                            <div className="form-search form-group">
                                <div className="col-md-12">
                                    <div id="legend">
                                        <legend>Create New Leave Type</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="input-group svX1">
                                                <label className="input-group-addon imagetype-width" id="firstName-addon">Leave Type</label>
                                                <input className="form-control" type="text" id="leavet" name="leavet" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="input-group svX2">
                                                <label className="input-group-addon imagetype-width" id="lastName-addon">Leave Day</label>
                                                <input className="form-control" type="number" id="leaved" name="leaved" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="input-group svX2">
                                                <label className="" id="lastName-addon">Accumulated Option</label>
                                                <label className="radio-inline" id="lastName-addon">Yes</label>
                                                <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                                <label className="radio-inline" id="lastName-addon">No</label>
                                                <input className="radio-inline" type="radio" id="lastName" name="lastName" />
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="row"></div>
                                </div>
                            </div>&nbsp;
                            <div className="form-group">
                                <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.addNewLeaveList.bind(this)}>Save</button> &nbsp; &nbsp;

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
                                    <th>Leave Type</th>
                                    <th>Leave Day</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        return (
                                            <LeaveTypeChild
                                                key={idx}
                                                index={idx}
                                                //create new any veriable name leave
                                                leavetypenew={item.leavetype}
                                                leavetypedayNew={item.leaveday}
                                                id={idx}
                                                deleteUserBoard={this.removeLeave.bind(this)}

                                            />
                                        )
                                    }
                                }) : null}

                            </tbody>
                        </table>

                    </div>

                </div></div>)



    }
}

export default CreateNewLeavetype;