import React from 'react';
import { Link } from 'react-router-dom';

function Favorites({ favoriteRecipes }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Receitas Favoritas</h1>
      {favoriteRecipes.length === 0 ? (
        <p>Você ainda não tem receitas favoritas.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favoriteRecipes.map((recipe) => (
            <li
              key={recipe.id}
              style={{
                margin: '20px auto',
                padding: '10px',
                border: '1px solid #f77f00',
                borderRadius: '8px',
                maxWidth: '400px',
                textAlign: 'left',
              }}
            >
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#e63946' }}>
                <h3>{recipe.name}</h3>
                <img
                  src={recipe.img}
                  alt={recipe.name}
                  style={{ width: '100%', borderRadius: '5px' }}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#f77f00',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Voltar para Home
        </button>
      </Link>
    </div>
  );
}

export default Favorites;