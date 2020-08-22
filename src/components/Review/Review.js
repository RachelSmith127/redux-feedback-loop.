import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    State = {
        informationToAdd:{
            feeling: 0,
            understanding: 0,
            Support: 0,
            Comments: ''
        }
    }

    handleFeelingChange = (event) => {
        this.setState({
            informationToAdd: {
                ...this.state.InformationToAdd,
                feeling: event.target.value
            },
        });
    }

    handleUnderstandingChange = (event) => {
        this.setState({
            informationToAdd: {
                ...this.state.InformationToAdd,
                understanding: event.target.value
            },
        });
    }

    handleSupportChange = (event) => { 
        this.setState({
            informationToAdd: {
                ...this.state.informationToAdd,
                support: event.target.value
            },
        });
    }

    handleCommentsChange = (event) => { 
        this.setState({
            informationToAdd: {
                ...this.state.informationToAdd,
                comments: event.target.value
            },
        });
    }

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