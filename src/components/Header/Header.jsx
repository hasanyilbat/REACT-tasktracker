import React from "react";
import { useState } from "react";
import Addtask from "../Addtask/Addtask";

const Header = () => {
  const [closeTaskBar, setCloseTaskBar] = useState(false);

  const handleClicked = () => {
    setCloseTaskBar(!closeTaskBar);
  };

  return (
    <div>
      <h1 className="text-center">Task Tracker</h1>
      <button
        className="btn btn-danger d-block m-auto mt-4"
        onClick={handleClicked}
      >
        Close Add Tasks Bar
      </button>
      {closeTaskBar ? null : <Addtask />}
    </div>
  );
};

export default Header;
