import React, { Component } from 'react';
import { connect } from 'react-redux';


class Completed extends Component {
    // state = {
    //     comments: ''
    // }
    sendCompleted = (event) => {
        this.props.dispatch({ type:'ADD_COMPLETED',})
        this.props.history.push('/feeling')
        
    }
    
    render (){
        return(
            <div>
            <h2>Feedback!</h2>
            <h4>Thank You!</h4>
    
            <button onClick={this.sendCompleted}>Leave New Feedback</button>
            </div>
            
        );
    };
};


const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Completed);