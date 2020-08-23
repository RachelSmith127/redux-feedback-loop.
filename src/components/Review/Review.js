import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    // State = {
    //     informationToAdd:{
    //         feeling: 0,
    //         understanding: 0,
    //         Support: 0,
    //         Comments: ''
    //     }
    // }

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

    addInformation = (event) => {
        this.props.dispatch({type: 'ADD_FEEDBACK', payload: this.state.informationToAdd})
        this.props.history.push('/review')
    }

    render (){

        return(
            <div>
                <div>Review Your Feedback:</div>
                <div>Feelings:{this.state.feeling}</div>
                <div>Understanding:{this.state.understanding}</div>
                <div>Support:{this.state.support}</div>
                <div>Comments:{this.state.comments}</div>
                <button onClick={this.addInformation}>Submit</button>
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