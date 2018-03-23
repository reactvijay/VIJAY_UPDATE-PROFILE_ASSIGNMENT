import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AccountSummary from './AccountSummary';
import EmailPassword from './EmailPassword';
import AccessInformation from './AccessInformation';
import { mockdata } from '../mockdata';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        console.log(mockdata);
        this.state = { data: {}, isEditable: false, email: '' };
        // this.updateEmail;

    }

    componentDidMount() {
        axios.get('http://172.16.110.13:3000/users/getDetails?profileid=114406')
            .then((response) => {
                if (response && response.data) {  //null check
                    this.updateState(response.data.userDetails[0]);
                }
            })
            .catch((error) => { //shows error whether service or ..
                console.log(error);
            });
    }
    updateState = (value) => {
        this.setState({
            data: value
        })
    }
    hideLabel = () => {
        this.setState({
            isEditable: true,
        });
    }


    saveHandler = () => {
        const email = 'vijay@gmail.com';
        axios.post('http://172.16.110.13:3000/users/edit-profile?profileid=116607', {
            email: this.state.email,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    updateEmail = (email) => {
        console.log(email);
    }
    render() {
        return (
            <div>
                <h2>Edit profile</h2>
                <div id="main">
                    <div className="tabbed-content-wrapper">
                        <div className="tabs-container">
                            <div className="tab-content">
                                <form>

                                    <div className="model-properties">
                                        <AccountSummary accountSummaryInfo={this.state.data} />
                                        <EmailPassword emailPasswordInfo={this.state.data} iseditable={this.state.isEditable} updateemail={this.updateEmail} />
                                        <AccessInformation accessInfo={this.state.data} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={() => this.saveHandler()}>Save</button>

                <button type="submit">Cancel</button>

                <button type="submit" onClick={(updateEmail) => this.hideLabel()}>Edit</button>

            </div>
        );
    }
}


export default EditProfile;
