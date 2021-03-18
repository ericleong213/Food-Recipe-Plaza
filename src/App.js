import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./RecipeTile";
// import RecipeTile from "./components/recipe-tile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipe() {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  return (
    <div className="app">
      <h1>Food Recipe Plaza 🍔👑</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search" />
        <select className="app_healthLabels">
          <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
          <option onClick={() => setHealthLabel("vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => setHealthLabel("paleo")}>Paleo</option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => (
          <RecipeTile recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
