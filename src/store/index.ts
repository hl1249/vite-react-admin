import { legacy_createStore as createStore, combineReducers } from 'redux';
import LayoutReducer from "./layout/reducer";
const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  

  const reducer = combineReducers({
    layout: LayoutReducer,
    count:counterReducer
  });
  // 创建store
  const store = createStore(
    reducer
  );
  
  export default store;