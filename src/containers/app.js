import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { requestZen, FavZen } from '../actions/app';
import Zen from '../components/Zen';
import Favs from '../components/Favs'
import { Link } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';

export class App extends Component {
  
  static propTypes = {
    quote: PropTypes.string.isRequired,
    favs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onFavHandler = this.onFavHandler.bind(this);

    this.state = {
      zen: {
        count: 0,
        quotes: [],
        favs: []
      }
    }
  }

  onClickHandler() {
    const {dispatch} = this.props;
    dispatch(requestZen());
  }

  onFavHandler() {
    const {dispatch, favAdded} = this.props;
    if(!favAdded)
    dispatch(FavZen());
  }

  render() {
    return (
        <div className={styles.container}>
          <Zen
              quote={this.props.quote}
              onClickHandler={ this.onClickHandler }
              onFavHandler = {this.onFavHandler}
          />

          <h2>Favorites</h2>
              <Favs favs={this.props.favs} />

        </div>
    );
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(requestZen());
  }
}

function mapStateToProperties(state) {
  const data = state.app.zen;
  debugger;

  return {
    quote: data.currentQuote,
    favs: data.favs,
    favAdded: data.favAdded
  };
}

export default connect(mapStateToProperties)(App);


