import React, { Component } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register';

export default class RegisterShop extends Component {
    render() {
        return (
            <>
                <Register role="Customer" />
            </>
        );
    }
}