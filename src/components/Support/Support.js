import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    render (){

        return(
            <div>
            <h2>How well are you being supported?</h2>
            <h4>Support?</h4>
            <input type= "number"/>
            <button>Next</button>
            </div>
            
        );
    };
};


const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Support);