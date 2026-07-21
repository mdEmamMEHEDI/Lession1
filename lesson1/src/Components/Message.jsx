import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Message() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const checkUser = () => {
    if (name === "Mehedi") {
      setMessage("Hello Mehedi");
    } else {
      setMessage("Wrong User");
    }
  };

  return (
    <div className="container mt-5">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button
        className="btn btn-primary mt-3"
        onClick={checkUser}
      >
        Check
      </button>

      <h3 className="mt-3">{message}</h3>
    </div>
  );
}

export default Message;