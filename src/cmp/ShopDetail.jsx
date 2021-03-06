import React, { useState } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopDetail = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile_number, setMobile_number] = useState("");
    const [shop_owner_name, setShop_owner_name] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            email,
            mobile_number,
            shop_owner_name,
            description,
        };
        fetch('/shop/create', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                history.push({ pathname: "/productdetail", state: { ShopDetailId: resp.id } });
            })
        })
    }

    return (
        <div className="outer" >
            <div className="inner" >
                <form onSubmit={handleSubmit}>
                    <h3>Register</h3>

                    <div class="form-group  ">
                        <label for="name">Name :</label>
                        <input type="text" id="name" onChange={(e) =>
                            setName(e.target.value)
                        }
                            class="form-control " placeholder="Name " />
                    </div>
                    <div class="form-group ">
                        <label for="email">E-mail : </label>

                        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}
                            class="form-control " placeholder="E-mail" />
                    </div>
                    <div class="form-group ">
                        <label for="mobile_number">Mobile Number :</label>
                        <input type="text" id="mobile_number" onChange={(e) => setMobile_number(e.target.value)}
                            class="form-control " placeholder="Mobile Number" />
                    </div>

                    <div class="form-group ">
                        <label for="shop_owner_name">Shop Owner Name :</label>
                        <input type="text" id="shop_owner_name" onChange={(e) => setShop_owner_name(e.target.value)}
                            class="form-control" placeholder="Shop Owner Name" />
                    </div>
                    <div class="form-group ">
                        <label for="description">Description :</label>
                        <textarea id="description" onChange={(e) => setDescription(e.target.value)}
                            class="form-control register_textbox" rows="4" cols="20 !important"></textarea>
                    </div>

                    <button type="Submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>
                </form>
            </div >
        </div >
    )
}

export default ShopDetail


// export default class ShopDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             email: "",
//             mobile_number: "",
//             shop_owner_name: "",
//             description: "",
//             // accessToken: Cookies.get('test1'),
//         };
//         this.handleSubmit = (event) => {
//             event.preventDefault();
//             const data = {
//                 name: this.state.name,
//                 email: this.state.email,
//                 mobile_number: this.state.mobile_number,
//                 shop_owner_name: this.state.shop_owner_name,
//                 description: this.state.description,
//             };
//             fetch('/shop/create', {
//                 method: 'post',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data),
//             }).then((result) => {
//                 result.json().then((resp) => {
//                     console.log(resp);
//                     navigate("/productdetail", { state: { ShopDetailId: resp.id } });
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
//                             <label for="name">Name :</label>
//                             <input type="text" id="name" onChange={(e) => {
//                                 this.setState({ name: e.target.value });
//                             }}
//                                 class="form-control " placeholder="Name " />
//                         </div>
//                         <div class="form-group ">
//                             <label for="email">E-mail : </label>

//                             <input type="text" id="email" onChange={(e) => {
//                                 this.setState({ email: e.target.value });
//                             }}
//                                 class="form-control " placeholder="E-mail" />
//                         </div>
//                         <div class="form-group ">
//                             <label for="mobile_number">Mobile Number :</label>
//                             <input type="text" id="mobile_number" onChange={(e) => {
//                                 this.setState({ mobile_number: e.target.value });
//                             }}
//                                 class="form-control " placeholder="Mobile Number" />
//                         </div>

//                         <div class="form-group ">
//                             <label for="shop_owner_name">Shop Owner Name :</label>

//                             <input type="text" id="shop_owner_name" onChange={(e) => {
//                                 this.setState({ shop_owner_name: e.target.value });
//                             }}
//                                 class="form-control" placeholder="Shop Owner Name" />
//                         </div>
//                         <div class="form-group ">
//                             <label for="description">Description :</label>
//                             <textarea id="description" onChange={(e) => {
//                                 this.setState({ description: e.target.value });
//                             }}
//                                 class="form-control register_textbox" rows="4" cols="20 !important"></textarea>
//                         </div>

//                         <button type="Submit" className="btn btn-dark btn-lg btn-block">Register</button>
//                         <p className="forgot-password text-right">
//                             Already registered <a href="#">log in?</a>
//                         </p>
//                     </form>
//                 </div >
//             </div >
//         );
//     }
// }