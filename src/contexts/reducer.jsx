export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // 스프레드 신텍스??
        basket: [...state.basket, ...action.item],
      };

    default:
      return state;
  }
};
export default reducer;
