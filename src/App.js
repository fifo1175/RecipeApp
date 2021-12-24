import logo from './logo.svg';
import React from "react";
import './App.css';

const App = () => {
  const APP_ID = "9e900ada";
  const APP_KEY = "82dbdfbabcdb5fbcdd1eca1e9b519152";

  const pizzaExample =
      `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
      <div className="App">
        <h1>Hello React</h1>
          <form className="search-form">
              <input className="search-bar" type="text"/>
              <button className="search-button" type="submit">Search</button>
          </form>
      </div>
  );
};

export default App;
