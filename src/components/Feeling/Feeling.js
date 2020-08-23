import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {
    state = {
        feeling: 0
    }

    sendFeelings = (event) => {
        this.props.dispatch({ type:'ADD_FEELINGS', payload: this.state.feeling})
        this.props.history.push('/understanding')
    }
    render (){

        return(
            <div>  
            <h2>How are you feeling today</h2>
            <h4>feeling?</h4>
            <input type= "number"/>
            <button type="submit" onSubmit={this.sendFeelings}>Next</button>
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