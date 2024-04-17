import { SET_LAYOUT_IS_OPEN } from './actionTypes';

export const setLayoutIsOpen = (isOpen:boolean) => ({
    type: SET_LAYOUT_IS_OPEN,
    payload: isOpen,
});