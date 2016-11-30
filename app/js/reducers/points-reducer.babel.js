import C from '../constants';
import createPoint from '../helpers/create-point';

const INITIAL_STATE = [];

const resetSelected = (state) => {
  const newState = [];
  for (let i = 0; i < state.length; i++) {
    newState[i] = { ...state[i], isSelected: false };
  }
  return newState;
};

const insertPoint = (state=INITIAL_STATE, action) => {
  const {data} = action;

  switch (action.type) {

  case 'ADD_POINT': {
    const newState = resetSelected(state);
    newState.push( createPoint(data) );
    return newState;
  }

  }

  return state;
};

export default insertPoint;