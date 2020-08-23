import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: 0
    }
    sendUnderstanding = (event) => {
        if(this.state.understanding !== 0) {
        this.props.dispatch({ type:'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/support')
        }else {
            alert('Please choose a number between 1 and 5')
        }
    }
    render (){
        
        return(
            <div>
            <h2>How are you understanding the content?</h2>
            <h4>Understanding?</h4>
            <input type= "number" onChange ={(event) => this.setState({understanding:event.target.value})}/>
            <button onClick={this.sendUnderstanding}>Next</button>
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