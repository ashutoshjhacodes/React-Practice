import React, { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const handleActivity = (e) => {
    setActivity(e.target.value);
  };
  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };
  const removeActivity = (i) => {
    const newList = listData.filter((ele, id) => {
      return i != id;
    });
    setListData(newList);
  };
  const removeAll = () => {
    setListData([]);
  };

  return (
    <>
      <div className="container">
        <div className="header">To Do List</div>
        <input
          className="input"
          placeholder="Add Activity"
          value={activity}
          onChange={handleActivity}
          required
        />
        <button disabled={!activity} onClick={addActivity}>
          Add
        </button>
        <p className="list-heading">Here is your list :{")"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div>
                    <button
                      className="remove"
                      onClick={() => removeActivity(i)}
                    >
                      remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
};

export default Todo;
