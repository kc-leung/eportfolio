export const isModalWindow = (bool) => {
  console.log('click');
  return {
    type: 'IS_MODAL_WINDOW',
    isModalWindowStatus: bool,
  };
};
