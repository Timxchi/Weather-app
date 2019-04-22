import React, {Component} from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = '166544dbe0c029db97ff980a7f2cf76c';

class App extends Component {
  
  state = {
    city: undefined,
    country: undefined,
    tiedot: [],
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    

    if (city && country){
      this.setState({
        city: data.city.name,
        country: data.city.country,
        tiedot: data.list,
        error: ""
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        tiedot: [],
        error: "Please enter the values."
      })
    }
    console.log(this.state.tiedot);
  }
  render(){
    return(
      <div>
        <div className="header headerheader">
          <Titles />
        </div>
          <div className="row">
            <div className="column sidecolumn">
            </div>
            <div className="column maincolumn">
              <Form getWeather={this.getWeather}/>
              <Weather 
                city={this.state.city}
                country={this.state.country}
                tiedot={this.state.tiedot}
                error={this.state.error}/>
            </div>
            <div className="column sidecolumn">
            </div>
          </div>
      </div>
    );
  }
};

export default App;