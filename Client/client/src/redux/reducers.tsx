import { combineReducers } from 'redux';

const initialState = {
  items: [],
  user: {
    ADQs: [],
    Follows: []
  },
  searchVal: '',
  selectedItem: {},
  selectedUser: {
    ADQs: [],
    Follows: []
  },
}

const store = (state = initialState, action: any) => {
  switch (action.type) {
    case 'getItems':
    return {
      ...state,
      items: [...action.payload]
    };
    case 'getUser':
      return {
        ...state,
        user: {...action.payload}
        };
    case 'getSingleItem':
      return {
        ...state,
        selectedItem: action.payload
      };
    case 'setSearchVal':
      return {
        ...state,
        searchVal: action.payload
      };
    case 'setSelectedUser':
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
};

// Combining both reducers
const reducers = combineReducers({
  store,
});

export default reducers;