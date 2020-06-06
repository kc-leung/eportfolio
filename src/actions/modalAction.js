export const isModalWindow = (bool) => {
  return {
    type: 'IS_MODAL_WINDOW',
    isModalWindowStatus: bool,
  };
};
