export const ActionTypes = {
    EDIT_ITEM_CHANGED: 'EDIT_ITEM_CHANGED'
}

export const editItemChanged = item => ({ type: ActionTypes.EDIT_ITEM_CHANGED, payload: item })