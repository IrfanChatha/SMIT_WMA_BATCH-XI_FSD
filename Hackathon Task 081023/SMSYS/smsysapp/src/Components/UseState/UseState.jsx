import React, { useState } from "react";

function UseState() {
  //   const [counter, setCounter] = useState(0);

  const [title, setTitle] = useState("");

  //   const btnIncrement = () => {
  //     setCounter(counter + 1);
  //   };

  //   const btnDecrement = () => {
  //     setCounter(counter - 1);
  //   };

  const changeHandler = (e) => {
    // Update the title state with the new input value
    setTitle(e.target.value);
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>{title}</h1>

            <form>
              <input
                className="bg-primary"
                type="text"
                id="title2"
                onChange={changeHandler}
                value={title} // Bind the input value to the title state
              />
            </form>

            {/* <button
          className="btn btn-primary"
          style={{ width: "100px" }}
          onClick={btnIncrement}
        >
          +
        </button>
        <h3>{counter}</h3>
        <button
          className="btn btn-danger"
          style={{ width: "100px" }}
          onClick={btnDecrement}
        >
          -
        </button> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default UseState;
