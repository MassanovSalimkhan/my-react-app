import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header'; 
import UserList from './UserList'; 
import About from './About'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="app-container">
        {/* Logos */}
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        {/* Counter Section */}
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      {/* User List Section */}
      <div className="user-list-container">
        <h2>User List</h2>
        <UserList />
      </div>

      {/* About Section */}
      <div className="about-section">
        <About />
      </div>
    </>
  );
}

export default App;
