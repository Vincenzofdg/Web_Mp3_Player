import { NAME, PASSWORD, EMAIL } from "../actions";

const INITIAL_STATE = {
  name: "",
  password: "",
  email: { value: "", validated: false },
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case EMAIL:
      return {
        ...state,
        email: action.payload.email,
        validEmail: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
