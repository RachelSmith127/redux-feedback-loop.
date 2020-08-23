import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: 0
    }
    sendUnderstanding = (event) => {
        this.props.dispatch({ type:'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/support')
    }
    render (){
        
        return(
            <div>
            <h2>How are you understanding the content?</h2>
            <h4>Understanding?</h4>
            <input type= "number" onChange ={(event) => this.setState({understanding:event.target.value})}/>
            <button type="submit" onClick={this.sendUnderstanding}>Next</button>
            </div>
            
        );
    };
};


const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Understanding);