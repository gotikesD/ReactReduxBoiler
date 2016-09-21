import * as pageActions from '../actions/initial.js';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Example extends Component {

  componentWillMount() {
    this.props.pageActions.initial();
  }


  render() {
    return (
      <div>
        <div>Some basic data</div>
        <button onClick={() => { this.props.pageActions.sagaSpecific()}}>Run saga action</button>
        {this.props.loading ? <div>loading</div> : null}
        {this.props.error ? <div>{this.props.error.message}</div> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading : state.Initial.get('loading')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Example);