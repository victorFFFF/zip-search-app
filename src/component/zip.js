import React, {Component} from "react";
import axios from "axios";

class Zip extends Component {
    constructor(props){
        super(props);
        this.state ={zip:[]};

    }
    componentDidMount(){
        const zip = this.props.zip;
        const url= 'http://ctp-zip-api.herokuapp.com/zip/:zipcode';
        axios
        .get(url)
        .then((response) =>{
            const data = response.data;
            console.log(data);
            this.setState({zip});
        })
        .catch((err)=> console.log(err));
    }
    render(){
        let
    }
}

export default Zip;

