
export const actions = { ADD: "ADD", REMOVE: "REMOVE", SAVE: "SAVE", CHANGE: "CHANGE", FOCUS: "FOCUS", FILTER: "FILTER" };

const initialState = {
    items: [{ name: "qw", price: "11" }, { name: "er", price: "22" }],
    filterValue: "",
    changeItem: { name: "", price: "" },
    focus: -1
}

export const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case (actions.ADD):
            return {
                ...state,
                items: [action.payload.item, ...state.items],
                focus: -1
            }
        case (actions.REMOVE):
            return {
                ...state,
                items: [...state.items.slice(0, action.payload.focus), ...state.items.slice(action.payload.focus + 1)],
            }
        case (actions.SAVE):
            return {
                ...state,
                items: [...state.items.slice(0, state.focus), action.payload.item, ...state.items.slice(state.focus + 1)],
                changeItem: initialState.changeItem,
                focus: -1
            }
        case (actions.CHANGE):
            return {
                ...state,
                changeItem: action.payload.changeItem
            }
        case (actions.FOCUS):
            return {
                ...state,
                changeItem: action.payload.focus === -1 ? initialState.changeItem : state.items[action.payload.focus],
                focus: action.payload.focus
            }
        case (actions.FILTER):
            return {
                ...state,
                filterValue: action.payload.filterValue
            }
        default:
            return state;
    }
}