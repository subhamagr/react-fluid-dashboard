import noop from 'lodash/noop';

import { GRAPH_ACTION_TYPES } from '../actionTypes';

const initialState = {
  formState: {
    show: false,
    editing: null,
    onSave: noop
  },
  graphs: []
};


function graphReducer(state = initialState, action = {}) {
  switch(action.type) {
    case GRAPH_ACTION_TYPES.SHOW_GRAPH_FORM_DIALOG:
      return Object.assign({}, state, { 
        formState: {
          show: action.payload,
          editing: action.editing,
          onSave: action.onSave || noop
        },
      });
    case GRAPH_ACTION_TYPES.ADD_GRAPH:
      return Object.assign({}, state, { 
        graphs: [
          ...state.graphs,
          action.payload
        ],
      });

    case GRAPH_ACTION_TYPES.UPDATE_GRAPH:
      const index = state.graphs.findIndex((g, i) => i === action.payload.index);
      if (index < 0) return state;
      return Object.assign({}, state, { 
        graphs: [
          ...state.graphs.slice(0, index),
          action.payload,
          ...state.graphs.slice(index + 1),
        ],
      });
    default:
      return state;
  }
}

export default graphReducer;