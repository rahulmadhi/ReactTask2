import CreateCustomModal from "./CreateCustomModal";
import React, { useState } from "react";

const DisplayModal = () => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div>
      <h1>I am outside the Modal</h1>
      <CreateCustomModal isShowing={isShowing} setIsShowing={setIsShowing}>
        I am inside a Modal
      </CreateCustomModal>
    </div>
  );
};

export default DisplayModal;
