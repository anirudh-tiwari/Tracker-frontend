import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (props) => {
    const [mobile_number, setMobile_number] = useState("");
    const [role, setRole] = useState(props.role);
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            mobile_number,
        };
        fetch('/otp/send', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                history.push({ pathname: "/verifyotp", state: { mobile_data: resp.mobile_number, hash: resp.hash, role: role } });
            })
        })
    }
    return (
        <div className="outer" >
            <div className="inner" >
                <form onSubmit={handleSubmit}>
                    <h3>Register</h3>

                    <div class="form-group  ">
                        <label for="name">MobileNumber :</label>
                        <input type="text" id="name" onChange={(e) => setMobile_number(e.target.value)}
                            class="form-control " placeholder="Mobile Number " />
                    </div>
                    <button type="Submit" className="btn btn-dark btn-lg btn-block">Send OTP</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>
                </form>
            </div >
        </div >
    )
}

export default Register

// export default class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mobile_number: "",
//             Role: props.role,
//         };
//         this.handleSubmit = (event) => {
//             event.preventDefault();
//             const data = {
//                 mobile_number: this.state.mobile_number,
//             };
//             console.log("ani", data)
//             fetch('/otp/send', {
//                 method: 'post',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data),
//             }).then((result) => {
//                 result.json().then((resp) => {
//                     console.log(resp.mobile_number);
//                     navigate("/verifyotp", { state: { mobile_data: resp.mobile_number, hash: resp.hash, role: this.state.Role } });
//                 })
//             })
//         }
//     }
//     render() {
//         return (
//             <div className="outer" >
//                 <div className="inner" >
//                     <form onSubmit={this.handleSubmit}>
//                         <h3>Register</h3>

//                         <div class="form-group  ">
//                             <label for="name">MobileNumber :</label>
//                             <input type="text" id="name" onChange={(e) => {
//                                 this.setState({ mobile_number: e.target.value });
//                             }}
//                                 class="form-control " placeholder="Mobile Number " />
//                         </div>
//                         <button type="Submit" className="btn btn-dark btn-lg btn-block">Send OTP</button>
//                         <p className="forgot-password text-right">
//                             Already registered <a href="#">log in?</a>
//                         </p>
//                     </form>
//                 </div >
//             </div >
//         );
//     }
// }
