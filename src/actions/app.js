import { ZEN_API, FAV_ZEN, REQUEST_ZEN } from '../constants/action-types';
import fetch from 'isomorphic-fetch';


function makeInfo(data) {
  return {
    type: REQUEST_ZEN,
    data: data
  }
}

export function requestZen() {
  return function (dispatch) {
    return fetch(ZEN_API)
        .then((response) => { return response.text(); } ) //implicit return
        .then((json) => { return dispatch(makeInfo(json)) }
        );
  }
}

export function FavZen() {
  return {
    type: FAV_ZEN
  }
}
