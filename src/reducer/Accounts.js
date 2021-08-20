const INITIAL_STATE = {
  accounts: [],
};

const Accounts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return { accounts: [...state.accounts, action.payload] };
    case "TRANSACTION":
      return { accounts: action.payload };
    default:
      return state;
  }
};

export default Accounts;
