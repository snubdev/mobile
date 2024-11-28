import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import Favorites from './pages/Favorites';
import About from "./pages/About";

function App() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavoriteRecipes((prevFavorites) => {
      const isFavorite = prevFavorites.find((fav) => fav.id === recipe.id);
      if (isFavorite) {
        // Remove dos favoritos
        return prevFavorites.filter((fav) => fav.id !== recipe.id);
      } else {
        // Adiciona aos favoritos
        return [...prevFavorites, recipe];
      }
    });
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home toggleFavorite={toggleFavorite} favoriteRecipes={favoriteRecipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail toggleFavorite={toggleFavorite} favoriteRecipes={favoriteRecipes} />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/favorites" element={<Favorites favoriteRecipes={favoriteRecipes} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
