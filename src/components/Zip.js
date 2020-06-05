import React, { Component } from "react";
import axios from "axios";


class Zip extends Component {
    constructor(props){
        super(props);
   
             this.state={zipInfo: [],};
             this.initialState={zipInfo: []};
    }

    callTheApi(currentZip) {
            const url = "http://ctp-zip-api.herokuapp.com/zip/";
        axios
          .get(url + currentZip)
          .then((response) => {
            const data = response.data;

           for(let i = 0 ; i < data.length; i++)
           {  
             let array = [data[i].City,
                         data[i].State,
                         data[i].Xaxis,
                         data[i].Yaxis,
                         data[i].EstimatedPopulation,
                         data[i].TotalWages];
            this.setState({
                zipInfo: [...this.state.zipInfo, array]}) 
           }
          })
          .catch((err) => alert(this.state.zipCode + " zip code not found"));
      }


      mySubmitHandler = (event) => {
        
            event.preventDefault();
            this.setState(this.initialState);
            this.callTheApi(event.target.theInput.value);
      }

  render() {
     
      let display;
      display = (
        <ul  >
            {this.state.zipInfo.map((info) => (
            <div  style={{border: '2px solid black'}}>
            <br/>
            <h4 style={{backgroundColor: "gray"}}>{info[0]} </h4>
            <p>State :{info[1]}</p>
            <p>Location: ({info[2]},{info[3]})</p>
            <p>Poulation(estimated): {info[4]}</p>
            <p>Total Wages:{info[5]}</p>
            <br/>
            </div>
          ))}
      </ul>
      );
      
      return (     
        <form onSubmit={this.mySubmitHandler}>    
            <input type='text' name="theInput" />
            <input type='submit'/>
            {display}
      </form>

        );
    }
 
  }

export default Zip;
