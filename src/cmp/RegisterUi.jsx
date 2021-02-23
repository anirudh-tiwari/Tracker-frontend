import React, { Component } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Register extends Component {
    render() {
        return (
            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>TRACKER</h3>
                        <p>Track your product activit</p>
                        <input type="submit" name="" value="Login" /><br />
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Shop Detail</h3>
                                <div class="row register-form">

                                    <div class="form-group register-input ">
                                        <label for="name">Name :</label>
                                        <input type="text" id="name" class="form-control " placeholder="Name " value="" />
                                    </div>
                                    <div class="form-group register-input">
                                        <label for="email">E-mail : </label>

                                        <input type="text" id="email" class="form-control " placeholder="E-mail" value="" />
                                    </div>
                                    <div class="form-group register-input">
                                        <label for="mobile_number">Mobile Number :</label>

                                        <input type="text" id="mobile_number" class="form-control " placeholder="Mobile Number" value="" />
                                    </div>

                                    <div class="form-group register-input">
                                        <label for="shop_owner_name">Shop Owner Name :</label>

                                        <input type="text" id="shop_owner_name" class="form-control" placeholder="Shop Owner Name" value="" />
                                    </div>
                                    <div class="form-group register-input">
                                        <label for="description">Description :</label>
                                        <textarea id="description" class="form-control register_textbox" rows="4" cols="20 !important"></textarea>
                                    </div>
                                    <input type="submit" class="btnRegister" value="Register" />
                                </div>
                                {/* <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden" selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister" value="Register" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}