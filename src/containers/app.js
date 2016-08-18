import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { requestZen, FavZen } from '../actions/app';
import { Link } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';

export class App extends Component {
  
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
        <div className={styles.container}>
          <p>Boilerplate works!</p>
        </div>
    );
  }

  componentDidMount() {
    const {dispatch} = this.props;

  }
}

function mapStateToProperties(state) {
  return {

  };
}

export default connect(mapStateToProperties)(App);


