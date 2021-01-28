import React, { Component } from 'react';
import LevelChild from './LevelChild';
import DepartmentChild from './LevelChild';

class CreateNewLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelList: [],
            //startDate: undefined
            page: 1,

        }
    }

    addLevel(e) {
        e.preventDefault();

        //leveln is a  new veriable---------------------------------
        var data = { leveln: this.state.levelname, salaryn: this.state.salary, level: this.state.level }
        const arr = this.state.levelList;
        arr.push(data)
        this.setState({ levelList: arr });
    }

    removeDepartment(i) {
        const arr = this.state.levelList;
        console.log(i)
        arr.splice(i, 1)
        this.setState({ levelList: arr })
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

        var newData = this.state.levelList;
        var baseAppUrl = window.baseAppUrl;
        let per_page = 15; //window.per_page;
        const pages = newData && Math.ceil(this.state.levelList.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        return (
            <div className="container" >
                <div className="well">
                    <form onSubmit={this.addLevel.bind(this)}>
                        <fieldset>
                            <div className="form-search form-group">
                                <div className="col-md-12">
                                    <div id="legend">
                                        <legend>Create New Level</legend>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="input-group svX1">
                                                <label className="input-group-addon imagetype-width" id="firstName-addon">Level Name</label>
                                                <input className="form-control" type="text" id="levelname" name="levelname" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="input-group svX2">
                                                <label className="input-group-addon imagetype-width" id="lastName-addon">Salary</label>
                                                <input className="form-control" type="number" id="salary" name="salary" onChange={this.handleChange.bind(this)} />
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="col-md-8">
                                                <div className="input-group svX3">
                                                    <label className="input-group-addon imagetype-width" id="status-addon">Level</label>
                                                    <select className="form-control" name="level" id="level" onChange={this.handleChange.bind(this)}>

                                                        <option value="">Select Level</option>
                                                        <option value="ASSISTANT SUPERVISOR">ASSISTANT SUPERVISOR</option>
                                                        <option value="CEO">CEO</option>
                                                        <option value="DRIVER">DRIVER</option>
                                                        <option value="MANAGEMENT TRAINEE">MANAGEMENT TRAINEE</option>
                                                        <option value="OFFICE BOY">OFFICE BOY</option>

                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row"></div>
                                </div>
                            </div>&nbsp;
                            <div className="form-group">
                                <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.addLevel.bind(this)}>Save</button> &nbsp; &nbsp;

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
                                    <th>Level Name</th>
                                    <th>Salary</th>
                                    <th>Level</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        return (
                                            <LevelChild
                                                key={idx}
                                                index={idx}
                                                //levelvar is creating any new veriable------------
                                                levelvar={item.leveln}
                                                salaryvar={item.salaryn}
                                                level={item.level}
                                                id={idx}
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

export default CreateNewLevel;