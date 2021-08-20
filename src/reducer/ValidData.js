const INITIAL_STATE = {
  dataIsValid: null,
};

const validData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VALID_DATA":
      return { dataIsValid: action.payload };
    default:
      return state;
  }
};

export default validData;
