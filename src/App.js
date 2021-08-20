import React from "react";
import Accounts from "./components/AccountsList";
import Header from "./components/Header";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { validationData } from "./actions";

const App = (props) => {
  return (
    <section className="main-wrapper">
      <Header />
      <div className="main-container">
        <Accounts />
      </div>
      {props.validData ? (
        <Alert variant="danger" onClose={() => props.validationData(false)} dismissible>
          <p>Incorrect Data</p>
        </Alert>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    validData: state.validData.dataIsValid,
  };
};

export default connect(mapStateToProps, { validationData })(App);
