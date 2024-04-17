import { SET_LAYOUT_IS_OPEN } from './actionTypes';

const initialState = {
    layoutIsOpen: false,
};

export interface SetLayoutIsOpenAction {
  type: typeof SET_LAYOUT_IS_OPEN;
  payload: boolean;
}
const menuReducer = (state = initialState, action:SetLayoutIsOpenAction) => {
    switch (action.type) {
        case SET_LAYOUT_IS_OPEN:
            return {
                ...state,
                layoutIsOpen: action.payload,
            };
        default:
            return state;
    }
};

export default menuReducer;