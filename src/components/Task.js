import React, { useState } from "react";


function Task({ task }) {

  const [myList , setMyList] = useState(task);

  const handleDelete = () => {
    setMyList({...myList , isDeleted : true});
  };

  if (myList.isDeleted) {
    return null;
  }

  return (
    <div className="task">
      <div className="label">{myList.category}</div>
      <div className="text">{myList.text}</div>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
