const INITIAL_MODAL_WINDOW_STATE = {
  isModalWindowStatus: false,
};

export const modalWindowReducer = (
  state = INITIAL_MODAL_WINDOW_STATE,
  action
) => {
  switch (action.type) {
    case 'IS_MODAL_WINDOW':
      return { isModalWindowStatus: action.isModalWindowStatus };
    default:
      return state;
  }
};
