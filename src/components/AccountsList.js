import React from "react";
import { connect } from "react-redux";
import Account from "./Account";
class AccountsList extends React.Component {
  render() {
    return (
      <div className="account-list">
        <h1 className="account-list-header">Account List</h1>
        {this.props.accounts.map((account, index) => (
          <Account key={index} account={account} />
        ))}
      </div>
    );
  }
}

const mapStateFromProps = (state) => {
  return {
    accounts: state.accountsList.accounts,
  };
};
export default connect(mapStateFromProps)(AccountsList);
