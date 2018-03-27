import { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return 'Starter Code.';
  }
}

export default connect()(App);
