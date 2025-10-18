import React from 'react';

// React Router is a library that allows us to create multiple pages in a React app without reloading the entire page.
// We can use URLs like:
// /       - Home
// /about  - About
// /contact - Contact page
// Without React Router, clicking these links would reload the entire site.

const About = () => {
  return (
    <div className="about-container">
      {/* --- Section Header --- */}
      <h1>About This App</h1>

      {/* --- Description --- */}
      <p>
        Welcome to <strong>My Todos List</strong>! This app is built with React and provides a smooth, interactive experience for managing your daily tasks.
      </p>

      <p>
        The main features include:
      </p>

      <ul>
        <li>Add, delete, and complete tasks effortlessly</li>
        <li>Persistent storage using <strong>localStorage</strong></li>
        <li>Responsive layout that works on mobile, tablet, and desktop</li>
        <li>Modern glassmorphism design with subtle animations</li>
      </ul>

      <p>
        This app demonstrates core React concepts like <strong>state management</strong>, <strong>props</strong>, <strong>component structure</strong>, and <strong>React Router</strong>. It’s perfect for learning React while creating something functional.
      </p>

      <p>
        Developed with ❤️ by <strong>Janhvi Pareek</strong>.
      </p>
    </div>
  )
}

export default About;
