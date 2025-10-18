// import React, { useState, useEffect } from "react";

// const Profile = ({ todos = [] }) => {
//   // About Me state with localStorage persistence
//   const [about, setAbout] = useState(
//     localStorage.getItem("userAbout") || ""
//   );

//   const [userName, setUserName] = useState(
//     localStorage.getItem("userName") || ""
//   );

// //   useEffect(() => {
// //     localStorage.setItem("userAbout", about);
// //   }, [about]);

// //   useEffect(() => {
// //     localStorage.setItem("userName", userName);
// //   }, [userName]);

//   // Safe calculation of tasks
//   const tasksCompleted = todos?.filter(todo => todo.completed)?.length || 0;
//   const tasksPending = (todos?.length || 0) - tasksCompleted;

//   return (
//     <div className="profile-container">
//       <h1>Your Profile</h1>

//       {/* --- Name input if not set yet --- */}
//       {/* {!userName && ( */}
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           className="profile-input"
//         />
//       {/* )} */}

//       {/* --- About Me --- */}
//       <textarea
//         placeholder="About you"
//         rows="4"
//         value={about}
//         onChange={(e) => setAbout(e.target.value)}
//         className="profile-input"
//       ></textarea>

//       {/* --- Display User Info --- */}
//       <div className="profile-display">
//         <h2>Hello, {userName || "User"}!</h2>
//         {about && <p>{about}</p>}
//         <p><strong>Tasks Completed:</strong> {tasksCompleted}</p>
//         <p><strong>Tasks Pending:</strong> {tasksPending}</p>
//       </div>
//       <button
//   onClick={() => {
//     localStorage.clear();
//     window.location.reload();
//   }}
// >
//   Clear Data
// </button>

//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";

const Profile = ({ todos = [] }) => {
// ✅ Load user name from localStorage on first render
const [userName, setUserName] = useState(() => {
return localStorage.getItem("userName") || "";
});

// ✅ Save user name whenever it changes
useEffect(() => {
localStorage.setItem("userName", userName);
}, [userName]);

// ✅ Calculate completed and total tasks
const completedCount = todos.filter((todo) => todo.completed).length;
const totalCount = todos.length;

// ✅ Optional: Calculate simple performance percent
const performance =
totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

// ✅ Optional clear button
const clearAllData = () => {
if (window.confirm("Are you sure you want to clear all data?")) {
localStorage.clear();
window.location.reload();
}
};

return ( <div className="profile-container"> <h2 className="profile-heading">Profile Section</h2>

```
  {/* --- Greeting --- */}
  <h3 className="hello-user">
    Hello {userName ? userName : "User"} 👋
  </h3>

  {/* --- Input to change name --- */}
  <div className="profile-input">
    <label htmlFor="username">Enter your name:</label>
    <input
      id="username"
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Type your name..."
    />
  </div>

  {/* --- Task stats --- */}
  <div className="profile-stats">
    <p>
      <strong>Tasks Completed:</strong> {completedCount} / {totalCount}
    </p>
    <p>
      <strong>Performance:</strong> {performance}% 🎯
    </p>
  </div>

  {/* --- Contact Links --- */}
  <div className="profile-links">
    <h4>Connect with me:</h4>
    <ul>
      
      <li>
        <a
          href="mailto:janhvipareek2006@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
           Email
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/janhvi-pareek-280a04251"
          target="_blank"
          rel="noreferrer"
        >
           LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://github.com/TechByPareek"
          target="_blank"
          rel="noreferrer"
        >
           GitHub
        </a>
      </li>
      <li>
        <a
          href="https://leetcode.com/u/Janhvi_pareek/"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode
        </a>
      </li>
      <li>
        <a href="tel:+919315829393">+91-9315829393</a>
      </li>
    </ul>
  </div>

  <button className="clear-btn" onClick={clearAllData}>
    Clear Saved Data
  </button>
</div>


);
};

export default Profile;
