import React from "react";
import { useState } from "react";
import Task from "../Tasks/Task";

const Addtask = () => {
  const [task, setTask] = useState(" ");
  const [date, setDate] = useState(" ");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    setTask(e.target.task.value);
    setDate(e.target.date.value);
    data.push({ task: task, date: date });
    console.log(data);
    e.preventDefault();
  };

  return (
    <div className="mt-4 text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">Task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            aria-describedby="emailHelp"
            placeholder="AddTask"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="exampleInputPassword1">Day & Time</label>
          <input
            type="text"
            className="form-control"
            id="date"
            placeholder="Day & Time"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-5 d-block w-100 m-auto"
        >
          Submit
        </button>
        {data.map((task) => {
          <Task {...data} />;
        })}
      </form>
    </div>
  );
};

export default Addtask;
