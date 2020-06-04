import React, { Component } from "react";
import axios from "axios";


class Zip extends Component {
    constructor(props){
        super(props);
        this.state = { 
                       zipCode: "",
                        theState: "",
                        theCity: "",
                        found: false,};
            // this.state = { zipCode:null ,zipInfo :[]};
    }

    updateSomething(currentZip) {
            const url = "http://ctp-zip-api.herokuapp.com/zip/";
        axios
          .get(url + currentZip)
          .then((response) => {
            const data = response.data;
        
            console.log("DATA HERE");
            console.log(data);
            // console.log(data[0].Zipcode);
            // console.log(data[0].State);    
            //  console.log("ZIPINFO HERE" +this.state.theState);
            this.setState({ zipCode: data[0].Zipcode,
                            theState: data[0].State,
                            theCity: data[0].City, });
            // console.log("ZIPINFO HERE" +this.state.theState);

          })
          .catch((err) => console.log(this.state.zipCode + "not"));
      }

      mySubmitHandler = (event) => {
          event.preventDefault();
          this.setState({
             zipCode : event.target.theInput.value,
              found: true,
          });
          this.updateSomething(event.target.theInput.value);
      }

    

  render() {
      let display;
      if( this.state.found)
      {    display = (
        <ul>
        <li>{this.state.zipCode}</li>
        <li>{this.state.theState}</li>
        <li>{this.state.theCity}</li>
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
