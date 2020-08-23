import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
    state = {
        comments: ''
    }
    sendComments = (event) => {
        this.props.dispatch({ type:'ADD_COMMENTS', payload: this.state.comments })
        this.props.history.push('/review')
    }
    
    render (){
        return(
            <div>
            <h2>Any Comments you want to Leave?</h2>
            <h4>Comments</h4>
            <input type= "text" onChange ={(event) => this.setState({comments:event.target.value})} />
            <button type="submit" onClick={this.sendComments}>Next</button>
            </div>
            
        );
    };
};


const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Comments);