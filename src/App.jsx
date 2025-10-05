import React from "react";
function Student() {
  const stuName = "Jahnavi";
  const age = 23;
  const inEnr = true;
  const sub = ["react", "node.js", "express"];

  const stu = {
    id: "6201",
    email: "jahnavi@gmail.com",
  };
  function sayHello() {
    alert("hello,Student");
  }
  function showMessage(msg) {
    console.log("Message:", msg);
  }
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h2>🎓 Student Information</h2>
      <p>
        <strong>Name:</strong> {stuName}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Status:</strong> {inEnr ? "Enrolled" : "Not Enrolled"}
      </p>

      <h3>Subjects:</h3>
      <ul>
        {sub.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <p>
        <strong>Email:</strong> {stu.email}
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={sayHello}
          style={{
            marginRight: "10px",
            padding: "10px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Say Hello
        </button>

        <button
          onClick={() => showMessage("Welcome to React!")}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Show Message
        </button>
      </div>
    </div>
  );
}

export default Student;
