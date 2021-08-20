import React from "react";
import TransactionModal from "./TransactionModal";

class Account extends React.Component {
  state = {
    openModal: false,
  };

  render() {
    return (
      <React.Fragment>
        <div className="account">
          <div className="d-flex">
            <p className="account-detail">
              Bank: <span>{this.props.account.bank}</span>
            </p>
            <p className="account-detail">
              Account Number: <span>{this.props.account.accountNumber}</span>
            </p>
            <p className="account-detail">
              balance: <span>{this.props.account.balance}</span>
            </p>
          </div>
          <div>
            <button className="btn btn-primary me-4" onClick={() => this.setState({ openModal: true })}>
              Transaction
            </button>
          </div>
        </div>
        <TransactionModal
          show={this.state.openModal}
          handleClose={() => this.setState({ openModal: false })}
          account={this.props.account}
        />
      </React.Fragment>
    );
  }
}

export default Account;
