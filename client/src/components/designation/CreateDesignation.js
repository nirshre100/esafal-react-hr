import React, { Component } from 'react';

import DesignationChild from './DesignationChild';

class CreateDesignation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designationList: [],
            //startDate: undefined
            page: 1,

        }
    }

    addDesignations(e) {
        e.preventDefault();
        var data = { niraj: this.state.designation }
        const arr = this.state.designationList;
        arr.push(data)
        this.setState({ designationList: arr });
    }
    setStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    removeDesignation(i) {
        const arr = this.state.designationList;
        console.log(i)
        arr.splice(i, 1)
        this.setState({ designationList: arr })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        var newData = this.state.designationList;
        var baseAppUrl = window.baseAppUrl;
        let per_page = 15; //window.per_page;
        const pages = newData && Math.ceil(this.state.designationList.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        return (
            <div className="container" >
                <div className="well">
                    <form onSubmit={this.addDesignations.bind(this)}>
                        <fieldset>
                            <div className="form-search form-group">
                                <div className="col-md-12">
                                    <div id="legend">
                                        <legend>Create New Designation</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group svX1">
                                                <label className="input-group-addon imagetype-width" id="firstName-addon">Designation</label>
                                                <input className="form-control" type="text" id="designation" name="designation" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row"></div>
                                </div>
                            </div>&nbsp;
                            <div className="form-group">
                                <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.addDesignations.bind(this)}>Save</button> &nbsp; &nbsp;

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
                                    <th>Designation Name</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        return (
                                            <DesignationChild
                                                key={idx}
                                                index={idx}
                                                ram={item.niraj}
                                                id={idx}
                                                deleteUserBoard={this.removeDesignation.bind(this)}

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
export default CreateDesignation;
