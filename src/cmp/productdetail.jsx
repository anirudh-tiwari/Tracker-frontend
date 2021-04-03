import React, { useState, useEffect } from "react";
import '../App.css';
import { useHistory, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [shop_id, setShop_id] = useState("")
    const history = useHistory();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            image,
            shop_id,
        };
        fetch('/product/create', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                history.push({ pathname: "/stepsdetail", state: { ProductDetailId: resp.id } });
            })
        })
    }


    useEffect(() => {
        setShop_id(location.state.ShopDetailId)
    }, [])

    return (
        <div className="outer" >
            <div className="inner" >
                <form onSubmit={handleSubmit}>
                    <h3>Product Detail</h3>

                    <div class="form-group  ">
                        <label for="name">Name :</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)}
                            class="form-control " placeholder="Name " />
                    </div>
                    <div class="form-group ">
                        <label for="image">Image : </label>

                        <input type="text" id="image" onChange={(e) => setImage(e.target.value)}
                            class="form-control " placeholder="Image" />
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

export default ProductDetail

// export default class ProductDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             image: "",
//             shop_id: null,
//         };
//         this.handleSubmit = (event) => {
//             event.preventDefault();
//             const data = {
//                 name: this.state.name,
//                 image: this.state.image,
//                 shop_id: this.state.shop_id,
//             };
//             fetch('/product/create', {
//                 method: 'post',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data),
//             }).then((result) => {
//                 result.json().then((resp) => {
//                     console.log(resp);
//                     navigate("/stepsdetail", { state: { ProductDetailId: resp.id } });
//                 })
//             })
//         }
//     }
//     componentDidMount() {
//         if (this.props.location) {
//             this.setState({
//                 shop_id: this.props.location.state.ShopDetailId,
//             })
//         }
//     }
//     render() {
//         return (
//             <div className="outer" >
//                 <div className="inner" >
//                     <form onSubmit={this.handleSubmit}>
//                         <h3>Product Detail</h3>

//                         <div class="form-group  ">
//                             <label for="name">Name :</label>
//                             <input type="text" id="name" onChange={(e) => {
//                                 this.setState({ name: e.target.value });
//                             }}
//                                 class="form-control " placeholder="Name " />
//                         </div>
//                         <div class="form-group ">
//                             <label for="image">Image : </label>

//                             <input type="text" id="image" onChange={(e) => {
//                                 this.setState({ image: e.target.value });
//                             }}
//                                 class="form-control " placeholder="Image" />
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