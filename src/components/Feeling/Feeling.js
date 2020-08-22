import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {
    render (){

        return(
            <div>
            <h2>How are you feeling today</h2>
            <h4>feeling?</h4>
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

export default connect(mapStateToProps)(Feeling);