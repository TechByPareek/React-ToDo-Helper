import React from "react";

// React Router allows us to create multiple pages in React without reloading.
// /features - Features page

const Features = () => {
  return (
    <div className="features-container">
      {/* --- Section Header --- */}
      <h1>App Features</h1>

      {/* --- Feature List --- */}
      <p>
        <strong>My Todos List</strong> is designed to help you organize your tasks efficiently.
        Here are the key features:
      </p>

      <ul>
        <li><strong>Add Tasks:</strong> Quickly add new tasks with title and description.</li>
        <li><strong>Delete Tasks:</strong> Remove tasks you have completed or no longer need.</li>
        <li><strong>Mark Complete:</strong> Easily mark tasks as completed with a stylish animation.</li>
        <li><strong>Persistent Storage:</strong> Todos are saved in your browser using <strong>localStorage</strong>.</li>
        <li><strong>Responsive Design:</strong> Works smoothly on mobile, tablet, and desktop.</li>
        <li><strong>Modern UI:</strong> Glassmorphism design with smooth animations and hover effects.</li>
        <li><strong>React Router Integration:</strong> Navigate between Home, About, Features, and other pages seamlessly.</li>
      </ul>

      <p>
        These features make the app a perfect tool to learn React concepts while building a functional, interactive project.
      </p>
    </div>
  );
};

export default Features;
