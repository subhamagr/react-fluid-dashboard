import { GRAPH_ACTION_TYPES } from '../actionTypes';
import chartInitialValues from '../chartInitialValues';

export function handleShowGraphFormDialog(payload = false, editing = false, onSave = null) {
  return { type: GRAPH_ACTION_TYPES.SHOW_GRAPH_FORM_DIALOG, payload, editing, onSave };
}

export function handleAddGraph(payload) {
  return { type: GRAPH_ACTION_TYPES.ADD_GRAPH, payload };
}

export function handleUpdateGraph(payload) {
  return { type: GRAPH_ACTION_TYPES.UPDATE_GRAPH, payload };
}

export function initGraphs() {
  return (dispatch) => {
    dispatch(handleAddGraph(chartInitialValues['line']));
    dispatch(handleAddGraph(chartInitialValues['bar']));
    dispatch(handleAddGraph(chartInitialValues['pie']));
  }
}
