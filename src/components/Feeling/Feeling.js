import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {
    //defining state 
    state = {
        feeling: 0
    }

    sendFeelings = (event) => {
        //if no data is submitted please send an alert, and don't allow the page to advance 
        //otherwise push the information to history and advance to the next page
        if(this.state.feeling !== 0){
        this.props.dispatch({ type:'ADD_FEELINGS', payload: this.state.feeling})
        this.props.history.push('/understanding')
        }else{
            alert('Please choose a number between 1 and 5')
        }
    } 
    render (){
        console.log (this.state)
        return(
            <div>  
            <h2>How are you feeling today</h2>
            <h4>feeling?</h4>
            {/* below is our input with an event function that grabs our data from the input and stores it in setState */}
            <input type= "number" onChange ={(event) => this.setState({feeling:event.target.value})} />
            {/* this is our button that is triggered by click to run the function sendFeelings  */}
            <button onClick={this.sendFeelings}>Next</button>
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