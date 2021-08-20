import React, { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import AddAccountModal from "./AddAccountModal";

const Header = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      <div className="main-header">
        <div className="user-container">
          <RiUserLine />
          <span className="user-name">Hamed Nami</span>
        </div>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setOpenModal(true)}
        >
          Add Account +
        </button>
      </div>

      <AddAccountModal show={openModal} handleClose={() => setOpenModal(false)} />
    </React.Fragment>
  );
};

export default Header;
