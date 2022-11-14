"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../action-types/index");
const initialState = {
    loading: false,
    error: null,
    data: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case index_1.ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case index_1.ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case index_1.ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default: return state;
    }
};
exports.default = reducer;
