import React, { Component } from 'react';
import DepartmentChild from './DepartmentChild';

class NewDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentList: [],
            // startDate: undefined,
            page: 1,
            // pageNum: 0,
            // area: '', 
        }
    }
    adddDepartment(e) {
        e.preventDefault();
        //create new niraj variable
        var data = { niraj: this.state.departName }
        const arr = this.state.departmentList;
        arr.push(data)
        this.setState({ departmentList: arr });
    }

    removeDepartment(i) {
        const arr = this.state.departmentList;
        console.log(i)
        arr.splice(i, 1)
        this.setState({ departmentList: arr })
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

        var newData = this.state.departmentList;
        var baseAppUrl = window.baseAppUrl;
        let per_page = 15; //window.per_page;
        const pages = newData && Math.ceil(this.state.departmentList.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;


        return (
            <div className="container" >
                <div className="well">
                    <form onSubmit={this.adddDepartment.bind(this)}>
                        <fieldset>

                            <div className="form-search form-group">
                                <div className="col-md-12">
                                    <div id="legend">
                                        <legend>Create New Department</legend>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="input-group svX1">
                                                <label className="input-group-addon imagetype-width" id="firstName-addon">Department Name</label>
                                                <input className="form-control" type="text" id="departName" name="departName" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row"></div>
                                </div>
                            </div>&nbsp;
                            <div className="form-group">
                                <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.adddDepartment.bind(this)}>Save</button> &nbsp; &nbsp;

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
                                    <th>Department Name</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        return (
                                            <DepartmentChild
                                                key={idx}
                                                index={idx}
                                                id={idx}
                                                ram={item.niraj}
                                                deleteUserBoard={this.removeDepartment.bind(this)}

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

export default NewDepartment;