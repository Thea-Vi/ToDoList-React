import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <div>
        <li>
          {text}
          <button>Delete</button>
        </li>
      </div>
    </div>
  );
};

export default Todo;
