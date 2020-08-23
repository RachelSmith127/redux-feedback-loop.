import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {
    // handleFeelingChange = (event) => {
    //     this.setState({
    //         informationToAdd: {
    //             ...this.state.InformationToAdd,
    //             feeling: event.target.value
    //         },
    //     });
    // }

    // handleUnderstandingChange = (event) => {
    //     this.setState({
    //         informationToAdd: {
    //             ...this.state.InformationToAdd,
    //             understanding: event.target.value
    //         },
    //     });
    // }

    // handleSupportChange = (event) => { 
    //     this.setState({
    //         informationToAdd: {
    //             ...this.state.informationToAdd,
    //             support: event.target.value
    //         },
    //     });
    // }

    // handleCommentsChange = (event) => { 
    //     this.setState({
    //         informationToAdd: {
    //             ...this.state.informationToAdd,
    //             comments: event.target.value
    //         },
    //     });
    // }

    // addInformation = (event) => {
    //     this.props.dispatch({type: 'ADD_FEEDBACK', payload: this.state.informationToAdd})
    //     this.props.history.push('/review')
    // }

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
                <div>Understanding:{this.props.reduxSate.feedbackReducer.understanding}</div>
                <div>Support:{this.props.reduxSate.feedbackReducer.understanding}</div>
                <div>Comments:{this.props.reduxSate.feedbackReducer.understanding}</div>
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