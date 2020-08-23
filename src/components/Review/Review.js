import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {
   
    sendFeedback = () => {
        console.log('info submitted');
        axios.post('/feedback', this.props.reduxState.feedbackReducer)
            .then(response => {
                this.props.history.push('/completed');
            }).catch(error => {
                console.log('err in POST', error);
            })
    }

    render (){
        return(
            <div>
                <div>Review Your Feedback:</div>
                <div>Feelings:{this.props.reduxState.feedbackReducer.feeling}</div>
                <div>Understanding:{this.props.reduxState.feedbackReducer.understanding}</div>
                <div>Support:{this.props.reduxState.feedbackReducer.support}</div>
                <div>Comments:{this.props.reduxState.feedbackReducer.comments}</div>
                <button onClick={this.sendFeedback}>Submit</button>
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