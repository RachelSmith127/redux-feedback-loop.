import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
    render (){

        return(
            <div>
            <h2>Any Comments you want to Leave?</h2>
            <h4>Comments</h4>
            <input type= "text"/>
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

export default connect(mapStateToProps)(Comments);