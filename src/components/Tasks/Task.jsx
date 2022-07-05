import React from "react";
import { useState } from "react";
import { FaRegCalendarTimes } from "react-icons/fa";
const Task = ({ taskList, data }) => {
  const { id, task, date, isDone } = taskList;
  console.log(data);
  const handleClick = (e) => {
    console.log(id);
  };

  return (
    <div>
      {!taskList || !date ? null : (
        <div className="mt-4">
          <div
            className="alert alert-primary d-flex justify-content-center"
            role="alert"
          >
            <div>
              <h3>{task}</h3>
              <p>{date}</p>
            </div>

            <div className="icon" onClick={() => handleClick(id)}>
              <FaRegCalendarTimes />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
