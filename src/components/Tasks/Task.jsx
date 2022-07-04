import React from "react";

const Task = ({ task, date }) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h3>{task}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Task;
