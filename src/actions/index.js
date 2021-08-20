export const addAccount = (bank, number, balance = 1000000) => {
  return {
    type: "ADD_ACCOUNT",
    payload: { bank: bank, accountNumber: number, balance: balance },
  };
};

export const transaction = (sourceAccount, destinationAccount, accounts) => {
  let newAccounts;
  const destAcc = accounts.findIndex((account) => account.accountNumber === destinationAccount.accountNumber);
  if (destAcc !== -1 && destinationAccount.price < sourceAccount.balance) {
    newAccounts = accounts.map((account) => {
      if (account.accountNumber === sourceAccount.accountNumber) {
        account.balance = account.balance - destinationAccount.price;
      }

      if (destinationAccount.accountNumber && account.accountNumber === destinationAccount.accountNumber) {
        account.balance = account.balance + destinationAccount.price;
      }

      return account;
    });
  } else {
    newAccounts = accounts;
  }

  return {
    type: "TRANSACTION",
    payload: newAccounts,
  };
};

export const validationData = (data) => {
  return {
    type: "VALID_DATA",
    payload: data,
  };
};
