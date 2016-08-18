import { REQUEST_ZEN, FAV_ZEN } from '../constants/action-types';

const initialState = {
  zen: {
    favAdded: false,
    currentQuote: "",
    quotes: [],
    favs: []
  }
};

const app = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_ZEN:
        debugger;
      return Object.assign({}, state, {zen: { favAdded: false, currentQuote: action.data, quotes: [...state.zen.quotes, action.data], favs: [...state.zen.favs]}});
    case FAV_ZEN:
        debugger;
      return Object.assign({}, state, {zen: { favAdded: true, currentQuote: state.zen.currentQuote, favs: [...state.zen.favs, state.zen.currentQuote], quotes: [...state.zen.quotes]}});
    default:
      return state;
  }
};

export default app;