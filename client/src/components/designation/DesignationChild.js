import React, { Component } from 'react';

class DesignationChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            type: false,
            msg: [],
            description: "",
            title: "",
            editing: false
        }
    }

    deleteUser() {
        this.setState({ type: false, msg: [] });
        const url = window.baseApiUrl + '/delete_user.php';
        const self = this;
        var ajaxCall = window.ajaxCall;
        var data = { "id": this.props.id };
        window.bootbox.confirm({
            title: 'Delete ',
            message: 'Do you want to delete  ',
            buttons: {
                cancel: {
                    label: '<i className="fa fa-times"></i>' + 'Cancel'
                },
                confirm: {
                    label: '<i className="fa fa-check"></i>' + 'Confirm'
                }
            },
            callback(result) {
                if (result) {
                    //     const onSuccessMethod = data => {
                    //         self.props.deleteUserBoard(self.props.index);
                    //     }

                    self.props.deleteUserBoard(self.props.index);

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
                    // }
                    // ajaxCall(url, 'DELETE', data, onSuccessMethod, onFailMethod)
                }
            }
        })
    }

    edit() {
        this.setState({ type: false, msg: [] })
        if (this.state.editing) {
            this.setState({ editing: false })
        } else {
            this.setState({ editing: true })
        }
    }

    renderNormal() {
        const ind = this.props.index + 1;
        //console.log(this.props.firstName);
        return (

            //this ram name is called from NewDepartment
            <tr key={ind}>
                <td>{this.props.ram}</td>
                <td>
                    <a
                        href="javascript:void(0)" onClick={this.edit.bind(this)}>
                        Edit </a></td>
                <td>
                    <a href="javascript:void(0)" onClick={this.deleteUser.bind(this)}>
                        Delete
					 	</a>
                </td>
            </tr>

        )
    }

    changeStatus() {
        this.setState({ type: false, msg: [] })
        if (this.state.editing) {
            this.setState({ editing: false })
        } else {
            this.setState({ editing: true })
        }
    }

    renderForm() {
        const ind = this.props.index + 1;
        return (<tr key={ind}>
            <td>{ind}</td>
            <td>
                <input
                    type="text"
                    ref="title"
                    className="form-control"
                    defaultValue={this.props.title}
                /></td>
            <td>
                <textarea type="text" ref="description" defaultValue={this.props.description}></textarea>
            </td>
            <td>{this.props.created}</td>
            <td>
                <a
                    href="javascript:void(0)" onClick={this.save.bind(this)}>
                    Edit </a>
            </td>
            <td>
                <a href="javascript:void(0)" onClick={this.changeStatus.bind(this)}>
                    Delete
		 	</a>
            </td>
        </tr>)
    }
    getUserJson() {
        return {
            id: this.props.id,
            title: this.refs.title.value,
            description: this.refs.description.value

        }
    }
    save(e) {
        e.preventDefault();
        this.setState({ type: false, msg: [] });
        const url = window.baseApiUrl + '/update_article.php';
        const firstName = this.refs.firstName.value;
        const email = this.refs.email.value;
        const self = this;
        var ajaxCall = window.ajaxCall;
        //var data = {"id":this.props.id,"title":title,"description":description};
        var data = this.getUserJson();
        const onSuccessMethod = data => {
            window.scrollTo(0, 0);
            this.setState({ editing: false });
            self.props.updateUserText(
                self.props.id,
                firstName,
                email,
                self.props.created,
                self.props.index
            )
        }


        let onFailMethod = (err) => {
            window.scrollTo(0, 0);
            const errArr = []
            if (err.responseJSON && err.responseJSON.details) {
                err.responseJSON.details.forEach(item => {
                    errArr.push(item.message)
                })
            } else if (err.responseJSON) {
                errArr.push(err.responseJSON.message)
            } else {
                errArr.push(err.responseText)
            }
            self.props.updateError(errArr)
        }
        ajaxCall(url, 'POST', data, onSuccessMethod, onFailMethod)

    }
    render() {
        console.log('test', this.props);
        if (this.state.editing) {
            return this.renderForm()
        }
        return this.renderNormal()


    }

}

export default DesignationChild;