import React, { useState, useEffect } from "react";
import "./UserForm.css";

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("Waiting for user input...");

  useEffect(() => {
    if (name.length > 0) {
      setMessage(`Welcome ${name} 🚀`);
    } else {
      setMessage("Waiting for user input...");
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form Submitted\nName: ${name}\nAge: ${age}`);
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setMessage("Waiting for user input...");
  };

  return (
    <div className="card">
      <h1>React Form App</h1>

      <p className="subtitle">
        useState • useEffect • Form Handling
      </p>

      <div className="message-box">
        {message}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <div className="btns">
          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            className="reset"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="preview">
        <h3>Live Preview</h3>

        <p>
          <strong>Name:</strong> {name || "Not entered"}
        </p>

        <p>
          <strong>Age:</strong> {age || "Not entered"}
        </p>
      </div>

      <footer>
        Powered by TechFactOfficial • Developed by EngrAwais
      </footer>
    </div>
  );
}

export default UserForm;