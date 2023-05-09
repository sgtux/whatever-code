import { ActionTypes } from './actions'

const DEFAULT_STATE = {
    editItem: null
}

export const appReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === ActionTypes.EDIT_ITEM_CHANGED)
        return { editItem: action.payload }
    return state
}