import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addAccount } from "../actions";

const AddAccountModal = (props) => {
  const [accountData, setAccountData] = useState({
    bank: "",
    accountNumber: "",
  });
  const [validData, setValidData] = useState(true);

  useEffect(() => {
    const newAcc = props.accounts.findIndex((account) => account.accountNumber === accountData.accountNumber);
    if (newAcc === -1 && accountData.bank && accountData.accountNumber) {
      setValidData(true);
    } else {
      setValidData(false);
    }
  }, [accountData, props.accounts, validData]);

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Body>
        <div className="main-form">
          <label htmlFor="bank">Bank</label>
          <input type="text" id="bank" onChange={(e) => setAccountData({ ...accountData, bank: e.target.value })} />
        </div>
        <div className="main-form">
          <label htmlFor="account-number">Account Number</label>
          <input
            type="text"
            id="account-number"
            onChange={(e) => setAccountData({ ...accountData, accountNumber: e.target.value })}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          disabled={!validData}
          variant="success"
          onClick={() => {
            props.addAccount(accountData.bank, accountData.accountNumber);
            props.handleClose();
          }}
        >
          ADD
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapSateToProps = (state) => {
  return {
    accounts: state.accountsList.accounts,
  };
};

export default connect(mapSateToProps, { addAccount })(AddAccountModal);
