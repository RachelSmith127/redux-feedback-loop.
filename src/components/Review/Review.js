import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    render (){

        return(
            <div>
            <h2>Review Your Feedback</h2>
            <h4>Feelings:</h4>
            <h4>Understanding:</h4>
            <h4>Support:</h4>
            <h4>Comments:</h4>
            <button>Submit</button>
            </div>
            
        );
    };
};


const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review);