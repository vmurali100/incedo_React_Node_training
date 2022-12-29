import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.user.fname}
                            name="fname"
                            onChange={(e) => {
                                this.props.handleChange(e);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.user.lname}
                            name="lname"
                            onChange={(e) => {
                                this.props.handleChange(e);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={this.props.user.email}
                            name="email"
                            onChange={(e) => {
                                this.props.handleChange(e);
                            }}
                        />
                    </div>
                   {
                     this.props.editIndex != null ? 
                     <button type="button" className="btn btn-primary" onClick={this.props.updateUser}>UpdateUser</button>:
                     <button type="button" className="btn btn-primary" onClick={this.props.handleSubmit} > Submit </button>
                   }
                    
                </form>
            </div>
        </>
    }
};

export default UserForm;