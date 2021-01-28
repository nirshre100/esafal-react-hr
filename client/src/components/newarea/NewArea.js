import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select'
import NewAreaChild from './NewAreaChild';

class NewArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cancellationPolicies: [],
            startDate: undefined,
            countries: [],
            page: 1,
            pageNum: 0,
            area: '',
        }
    }

    loadCountries() {
        const url = window.baseApiUrl + '/api/cibdistrictlists';
        const self = this;
        var ajaxCall = window.ajaxCall;
        const onSuccessMethod = data => {

            self.setState({
                countries: data
            })
        }
        const onFailMethod = err => {
            console.log(err.responseText)
        }

        ajaxCall(url, 'GET', null, onSuccessMethod, onFailMethod)

    }

    // setStartDate(date) {
    //     this.setState({
    //         startDate: date
    //     });
    // }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    getPolicyJson() {
        return {
            areano: this.state.areaNo, areaname: this.state.areaName, areaDis: this.state.area,
            //  id: '22' //this.state.id
        }
    }


    componentDidMount() {
        this.loadCountries()

    }

    validateAddNewPolicy() {
        window.scrollTo(0, 0);
        if (this.state.id === '' || this.state.defaultDescription === '') {
            this.setState({ type: true, msg: ['Please input all field'] });
            return false;
        }
        return true;
    }

    addNewPolicy(e) {
        e.preventDefault();
        //this.setState({ type: false, msg: [] });
        //if (!this.validateAddNewPolicy()) return
        // const url = window.baseApiUrl + '/cancellation';
        const self = this;
        var ajaxCall = window.ajaxCall;
        var data = this.getPolicyJson();
        const arr = this.state.cancellationPolicies;

        arr.push(data)

        self.setState({ cancellationPolicies: arr });

        const onSuccessMethod = data => {
            // 	window.scrollTo(0, 0);
            // 	//self.props.getAllCancellationPolicies();
            // 	self.setState({ showAddNew: false });
            // 	self.setState({ msg: [data.defaultDescription + ' new policy added successfully '] });
            // 	self.setState({ type: false });
        }

        // let onFailMethod = (err) => {
        //     window.scrollTo(0, 0);
        //     var errArr = [];
        //     if (err.responseJSON && err.responseJSON.details) {
        //         err.responseJSON.details.forEach(function (item) {
        //             errArr.push(item.message);
        //         });
        //     } else if (err.responseJSON) {
        //         errArr.push(err.responseJSON.message);
        //     } else {
        //         errArr.push(err.responseText);
        //     }

        //     self.setState({ type: true });
        //     self.setState({ msg: errArr });
        //     // self.setState({msg:error.response.data});
        // }

        //ajaxCall(url, 'POST', data, onSuccessMethod, onFailMethod)
    }

    switchArea(newValue) {
        this.setState({
            area: newValue
        })
    }

    updateArea(id, areaNum, areaNa, index) {
        const arr = this.state.cancellationPolicies;
        arr[index] = {
            //   id,
            areaNum: areaNum,
            areaNa: areaNa,


        }
        this.setState({ cancellationPolicies: arr })
        this.setState({ msgEdit: [' Record ' + index + ' Updated  successfully '] });
        this.setState({ typeEdit: false });
    }



    render() {

        var newData = this.state.cancellationPolicies || [];
        var baseAppUrl = window.baseAppUrl;

        let per_page = 15; //window.per_page;
        const pages = newData && Math.ceil(this.state.cancellationPolicies.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        return (
            <div className="container" >
                <div className="well">
                    <fieldset>
                        <div className="form-search form-group">
                            <div className="col-md-12">
                                <div id="legend">
                                    <legend>Create New Area</legend>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="input-group svX1">
                                            <label className="input-group-addon imagetype-width" id="firstName-addon">Area No.</label>
                                            <input className="form-control" type="number" id="areaNo" name="areaNo" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-group svX2">
                                            <label className="input-group-addon imagetype-width" id="lastName-addon">Area Name</label>
                                            <input className="form-control" type="text" id="areaName" name="areaName" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>


                                    <div className="col-md-6">

                                        <div className="col-md-8">
                                            <div className="input-group svX3">
                                                <label className="input-group-addon imagetype-width" id="status-addon">District</label>
                                                <Select
                                                    ref="areaSelect"
                                                    placeholder='District'
                                                    options={this.state.countries}
                                                    simpleValue
                                                    clearable={false}
                                                    name="selected-arrea"
                                                    value={this.state.area}
                                                    onChange={this.switchArea.bind(this)}
                                                    searchable={this.state.searchable}
                                                    required="required"

                                                    //###
                                                    labelKey="districtValue"
                                                    valueKey="districtId"


                                                />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row"></div>
                            </div>
                        </div>
                        &nbsp;&nbsp;
                        <div className="form-group">
                            <div className="col-md-12"><button id="submit" className="btn btn-primary" onClick={this.addNewPolicy.bind(this)}>Save</button> &nbsp; &nbsp;

                            <a class="btn btn-primary" href="http://localhost:3000/">
                                    <span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>
                            </div>

                        </div>&nbsp;
                    </fieldset>

                    <div className="well" >

                        <table id="userTable" className="table table-bordered table-stripped results">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Area Name</th>
                                    <th>District</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newData && newData.length > 0 ? newData.map((item, idx) => {
                                    if (idx >= start_offset && start_count < per_page) {
                                        start_count++;
                                        return (
                                            <NewAreaChild
                                                key={idx}
                                                index={idx}
                                                areaNum={item.areano}
                                                areaNa={item.areaname}
                                                areaDis={item.areaDis}
                                                updateAre={item.areaDis}

                                                updateArea={this.updateArea.bind(this)}

                                            //defaultDescription={item.defaultDescription}
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

export default NewArea;