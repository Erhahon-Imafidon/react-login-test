import React, { useState } from "react";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const a = 3;
  const b = 3;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Mango</li>
      </ul>

      <h1 data-testid="mytestid" className="mt-4">
        Hello World
      </h1>
      <span title="sum">{a + b}</span>

      <Login />
    </>
  );
}

export default App;
