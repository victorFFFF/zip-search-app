import React, { Component } from "react";
import axios from "axios";


class Zip extends Component {
    constructor(props){
        super(props);
   
             this.state={zipInfo: []};
            
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
          this.setState({
             zipCode : event.target.theInput.value,
              found: true,
          });
          this.callTheApi(event.target.theInput.value);
      }

    

  render() {
     
      let display;
      if( this.state.found)
      {    display = (
        <ul>
            {this.state.zipInfo.map((s) => (
            <div style={{border: '2px solid black'}}>
            <br/>
            <h4 style={{backgroundColor: "gray", border: '2px solid black'}}>{s[0]} </h4>
            <li >State :{s[1]}</li>
            <li>Location: ({s[2]},{s[3]})</li>
            <li>Poulation(estimated): {s[4]}</li>
            <li>Total Wages:{s[5]}</li>
            <br/>
            </div>
          ))}
      </ul>
    
      );
      }


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
