import React, {Component} from 'react';  

class Weather extends Component {

    render(){
        return(
            <div className="weather-info">
                {
                this.props.city && this.props.country && <p className="weather-titletext">Location: 
                    <span> {this.props.city}, {this.props.country}</span>
                </p>
                }
                {
                this.props.tiedot.map((tieto)=>{return <p className="weather-titletext" key={tieto.dt}>Date: 
                        <span> {tieto.dt_txt}</span>
                    , Temperature: 
                        <span> {tieto.main.temp}</span>
                    , Humidity: 
                        <span> {tieto.main.humidity}</span>
                    , Condition: 
                        <span> {tieto.weather[0].description}</span>
                </p>})
                }
                {
                this.props.error && <p className="errormsg"> {this.props.error}</p>
                }
            </div>
        );
    }
};

export default Weather;