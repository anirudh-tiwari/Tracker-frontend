import React, { Component } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import { navigate } from "@reach/router";


export default class Verifyotp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            mobile_number: null,
            hash: null,
            role: null,
            accessToken: Cookies.get('accessToken'),
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            const data = {
                mobile_number: this.state.mobile_number,
                hash: this.state.hash,
                otp: this.state.otp,
                role: this.state.role,
            };
            console.log(data)
            fetch('/otp/verify', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }).then((result) => {
                result.json().then((resp) => {
                    console.log(resp);
                    navigate("/shopdetail");
                })
            })
        }
    }
    componentDidMount() {
        if (this.props.location) {
            this.setState({
                mobile_number: this.props.location.state.mobile_data,
                hash: this.props.location.state.hash,
                role: this.props.location.state.role,
            })
        }
    }

    render() {
        return (
            <div className="outer" >
                <div className="inner" >
                    <form onSubmit={this.handleSubmit}>
                        <h3>Register</h3>

                        <div class="form-group  ">
                            <label for="name">OTP :</label>
                            <input type="text" id="name" onChange={(e) => {
                                this.setState({ otp: e.target.value });
                            }}
                                class="form-control " placeholder="Mobile Number " />
                        </div>
                        <button type="Submit" className="btn btn-dark btn-lg btn-block">Send OTP</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">log in?</a>
                        </p>
                    </form>
                </div >
            </div >
        );
    }
}    