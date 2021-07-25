import { ADD_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};

export default function CardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer", action);
      return {
        ...state,
        cardData: action.data,
      };
    default:
      return state;
  }
}

// Action is in whole components, action is trigger by HomeContainer components so not depends to all.
