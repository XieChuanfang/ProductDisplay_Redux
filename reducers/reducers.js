'use strict';

import {TEXT_UPDATE, SWITCH_UPDATE} from '../actions/actions';

var defaultState = {
  filterText: '',
  inStockOnly: false
}


//拆分reducer1:todoList
function filterSwitch(state = false, action) {
	switch(action.type) {
		case SWITCH_UPDATE:
				return action.flag;
		default:
				return state;
	}
}

function filterText(state = '', action){
	switch(action.type) {
		case TEXT_UPDATE:
				return action.text;
		default:
				return state;
	}
}


//reducer：根reducer
export function productReducer(state = defaultState, action) {
	return {
		filterText: filterText(state.filterText, action),
		inStockOnly: filterSwitch(state.inStockOnly, action),
	}
}
