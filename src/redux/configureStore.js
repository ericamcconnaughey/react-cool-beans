import { createStore, combineReducers } from 'redux';
import { Reducer, initialState } from './reducer';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';



export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        Reducer,
        initialState, 
        ...createForms({
          feedbackForm: InitialFeedback
        })
    })
  );
    
  return store;
}