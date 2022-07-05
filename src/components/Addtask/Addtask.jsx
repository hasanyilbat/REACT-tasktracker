import React from "react";
import { useState } from "react";
import { FaRegCalendarTimes } from "react-icons/fa";

const Addtask = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [isDone, setIsDone] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, date: date };
    setData([...data, newTask]);
    // console.log(data);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log(id);
  };

  const handleDone = (e) => {
    if (isDone) {
      console.log("hey");
      console.log(e.target);
      e.target.classList.add("done");
      setIsDone(!isDone);
    } else {
      console.log("hea");
      console.log(e.target);
      e.target.classList.remove("done");
      setIsDone(!isDone);
    }
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
            type="date"
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
        {data.map((tasks, index) => {
          const { id, date, task } = tasks;
          return (
            <div key={index}>
              {!task || !date ? null : (
                <div className="mt-4" onClick={handleDone}>
                  <div
                    className="alert alert-primary d-flex justify-content-center"
                    role="alert"
                  >
                    <div>
                      <h3>{task}</h3>
                      <p>{date}</p>
                    </div>

                    <div className="icon" onClick={() => handleDelete(id)}>
                      <FaRegCalendarTimes />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Addtask;
