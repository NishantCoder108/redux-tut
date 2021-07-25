import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};

export default function CardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      //   console.log("Reducer", action);
      return [...state, { cardData: action.data }];

    case REMOVE_TO_CART:
      state.pop();
      return [...state];

    default:
      return state;
  }
}

// Action is in whole components, action is trigger by HomeContainer components so not depends to all.

//here, some changes for dynamic multiple data can be added . so for that first  {} changes to []  and {cardData: action.data,} and this is in {}
