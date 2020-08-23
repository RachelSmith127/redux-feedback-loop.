import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    state = {
        support: 0
    }
    sendSupport = (event) => {
        this.props.dispatch({ type:'ADD_SUPPORT', payload: this.state.support })
        this.props.history.push('/comments')
    }
    render (){
       
        return(
            <div>
            <h2>How well are you being supported?</h2>
            <h4>Support?</h4>
            <input type= "number" onChange ={(event) => this.setState({support:event.target.value})} />
            <button type ="submit" onSubmit={this.sendFeelings}>Next</button>
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