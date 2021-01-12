import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn41191704Reducer from '../features/SignIn41191704/redux/reducers'
import Dashboard13191702Reducer from '../features/Dashboard13191702/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn41191704: SignIn41191704Reducer,
Dashboard13191702: Dashboard13191702Reducer,

});