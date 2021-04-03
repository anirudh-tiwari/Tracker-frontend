import React, { Component } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


// const useStyles = makeStyles((theme) => ({
//     button: {
//         margin: theme.spacing(1),
//     },
// }));

export default class StepsDetail extends React.Component {
    // const classes = useStyles();

    constructor(props) {
        super(props);
        this.state = { values: [''], product_id: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                {/* <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} /> */}
                <TextField id="AddSteps" label={`Step ${i + 1}`} value={el || ''} className="m-1" onChange={this.handleChange.bind(this, i)} />
                {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} /> */}
                {/* <IconButton >
                    <RemoveIcon />
                </IconButton>
                <IconButton >
                
            </IconButton> */}
                <AddIcon className="m-1" onClick={this.addClick.bind(this)} />
                <RemoveIcon className="m-1 " onClick={this.removeClick.bind(this, i)} />
            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    handleSubmit(event) {
        console.log(this.state.values)
        event.preventDefault();
    }

    componentDidMount() {
        if (this.props.location) {
            this.setState({
                product_id: this.props.location.state.ProductDetailId,
            })
        }
    }
    render() {
        return (
            <div className="outer" >
                <div className="inner" >
                    <form onSubmit={this.handleSubmit}>
                        <h3>Steps</h3>
                        {this.createUI()}
                        {/* <input type='button' value='Add Steps' onClick={this.addClick.bind(this)} /> */}
                        {/* <input type="submit" value="Submit" /> */}
                        <Button
                            variant="contained"
                            color="primary"
                            className="m-2"
                            endIcon={<Icon>send</Icon>}
                            onClick={this.handleSubmit}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
