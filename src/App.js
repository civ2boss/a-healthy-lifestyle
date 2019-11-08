import React, { useState } from "react";

import useHealthApi from "./hooks/useHealthApi";

import "./App.css";

function App() {
  const [age, setAge] = useState(35);
  const [sex, setSex] = useState("female");
  const [pregnant, setPregnant] = useState(0);
  const [search, setSearch] = useState('');

  let result = useHealthApi(search, {});

  const handleFormSubmit = event => {
    event.preventDefault();

    setSearch({ age, sex, pregnant });
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={event => setAge(event.target.value)}
          />
        </label>
        <label>
          Sex:
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={sex === "female"}
              onChange={() => setSex("female")}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={sex === "male"}
              onChange={() => setSex("male")}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="checkbox"
              value="1"
              checked={pregnant === "1"}
              onChange={event => setPregnant(event.target.checked ? "1" : "0")}
            />{" "}
            Pregnant?
          </label>
        </label>
        <button type="submit">Search</button>
      </form>
      {JSON.stringify(result)}
    </div>
  );
}

export default App;
