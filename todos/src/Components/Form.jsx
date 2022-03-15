import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {

    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={inputText} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
