import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Bolo de Cenoura',
      img: 'https://example.com/bolo-cenoura.jpg',
      ratings: [5, 4, 5],
    },
    {
      id: 2,
      name: 'Pão de Queijo',
      img: 'https://example.com/pao-queijo.jpg',
      ratings: [4, 4, 3],
    },
    {
      id: 3,
      name: 'Brigadeiro',
      img: 'https://example.com/brigadeiro.jpg',
      ratings: [5, 5, 5],
    },
  ]);

  const [favorites, setFavorites] = useState([]);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const [tips] = useState([
    'Adicione um toque de limão para dar frescor aos seus bolos.',
    'Deixe a massa do pão descansar por 20 minutos antes de assar.',
    'Use manteiga de qualidade para um brigadeiro ainda mais cremoso.',
  ]);

  // Calcula a média das avaliações e ordena as receitas
  useEffect(() => {
    const recipesWithRatings = recipes.map((recipe) => {
      const avgRating =
        recipe.ratings.reduce((sum, rating) => sum + rating, 0) /
        recipe.ratings.length;
      return { ...recipe, avgRating };
    });

    const sorted = recipesWithRatings.sort(
      (a, b) => b.avgRating - a.avgRating
    );
    setSortedRecipes(sorted);
  }, [recipes]);

  // Adicionar ou remover favoritos
  const toggleFavorite = (recipe) => {
    if (favorites.some((fav) => fav.id === recipe.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Receitas Deliciosas</h1>

      {/* Barra de navegação com botões */}
      <div className="navbar">
        <Link to="/add-recipe">
          <button className="navbar-button">Adicionar Receita</button>
        </Link>
        <Link to="/favorites">
          <button className="navbar-button">Favoritos</button>
        </Link>
        <Link to="/about">
          <button className="navbar-button">Quem Somos</button>
        </Link>
      </div>

      {/* Dicas de receitas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Dicas de Cozinha</h2>
        <ul className="list-disc pl-5 bg-yellow-50 p-4 rounded-lg shadow-md">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Receitas favoritas */}
      {favorites.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Favoritos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <img
                  src={recipe.img}
                  alt={recipe.name}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{recipe.name}</h3>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                  onClick={() => toggleFavorite(recipe)}
                >
                  Remover dos Favoritos
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Receitas ordenadas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Melhores Receitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <img
                src={recipe.img}
                alt={recipe.name}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{recipe.name}</h3>
              <p className="text-sm text-gray-600">
                Avaliação Média: {recipe.avgRating.toFixed(1)}/5
              </p>
              <div className="flex justify-between">
                <Link to={`/recipe/${recipe.id}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                    Ver Receita
                  </button>
                </Link>
                <button
                  className={`px-4 py-2 rounded-lg shadow transition ${
                    favorites.some((fav) => fav.id === recipe.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                  }`}
                  onClick={() => toggleFavorite(recipe)}
                >
                  {favorites.some((fav) => fav.id === recipe.id)
                    ? 'Remover Favorito'
                    : 'Adicionar Favorito'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botão para adicionar nova receita */}
      <Link to="/add-recipe">
        <button className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
          Adicionar nova receita
        </button>
      </Link>
    </div>
  );
}

export default Home;
