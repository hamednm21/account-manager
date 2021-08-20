import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { transaction, validationData } from "../actions";

const TransactionModal = (props) => {
  const [destinationAccount, setDestinationAccount] = useState({
    accountNumber: "",
    price: 0,
  });
  const [validData, setValidData] = useState(null);

  useEffect(() => {
    const destAcc = props.accounts.findIndex((account) => account.accountNumber === destinationAccount.accountNumber);
    if (destAcc !== -1 && destinationAccount.price < props.account.balance) {
      setValidData(false);
    } else {
      setValidData(true);
    }
  }, [destinationAccount, props.account.balance, props.accounts]);

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Body>
        <div className="main-form">
          <label htmlFor="account-number">Account Number</label>
          <input
            type="text"
            id="account-number"
            onChange={(e) => setDestinationAccount({ ...destinationAccount, accountNumber: e.target.value })}
          />
        </div>
        <div className="main-form">
          <label htmlFor="price">price</label>
          <input
            type="text"
            id="price"
            onChange={(e) => setDestinationAccount({ ...destinationAccount, price: +e.target.value })}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="success"
          onClick={() => {
            props.validationData(validData);
            props.transaction(props.account, destinationAccount, props.accounts);
            props.handleClose();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateFromProps = (state) => {
  return {
    accounts: state.accountsList.accounts,
  };
};
export default connect(mapStateFromProps, { transaction, validationData })(TransactionModal);
