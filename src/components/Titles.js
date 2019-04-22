import React, {Component} from 'react';

class Titles extends Component {
    render(){
        return(
            <div>
                <h1 className="title">Weather application</h1>
                <p className="subtitle">Find out 5 day forecast in your area...</p>
            </div>
        );
    }
};

export default Titles;