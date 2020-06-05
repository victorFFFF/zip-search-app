import React, {Component} from "react";
import axios from "axios";

class Zip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: [],
            input:" " ,
        };

    }
    handlezipchange = () => {
        const zip = this.state.input;
        const url = `http://ctp-zip-api.herokuapp.com/zip/${zip}`;
        axios.get(url)
                .then((response) => {
                const data = response.data;
                console.log(response.data);
                this.setState({
                    zip: data
                });
            })
            .catch((err) => {console.log(err)
            this.setState({zip: []})
            });
    }
handleInput= (event)=> {
    this.setState({input: event.target.value.substr(0,5)})
}

    render() {


        return ( 
            <>
            zipcode
            {" "}
            <input type="text" value={this.state.input} onChange={this.handleInput}
             />
              {" "}
             <button onClick = {this.handlezipchange}> zipcode </button>
            {
                this.state.zip.map((item,index) => (
                    <div key={index}>
                    <h3>{item.City}, {item.State}  </h3>
                    <li>state: {item.State}</li>
                    <li>location:({item.Lat}, {item.Long}) </li>
                    <li>population (estimated): {item.EstimatedPopulation}</li>
                    <li>total wages: {item.TotalWages}</li>
                    </div>
                )
                    
                )
            }
            </>
        );
    }

}

export default Zip;