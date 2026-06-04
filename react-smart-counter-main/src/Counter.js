import React from "react";

function Counter(props) {

  return (

    <div>

      <h1
        style={{
          fontSize: "80px",
          margin: "20px 0",
          color: "#0f172a",
        }}
      >
        {props.value}
      </h1>

    </div>
  );
}

export default Counter;