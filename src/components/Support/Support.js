import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    state = {
        support: 0
    }
    sendUnderstanding = (event) => {
        this.props.dispatch({ type:'ADD_FEELINGS', payload: this.state.understanding })
        this.props.history.push('/support')
    }
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