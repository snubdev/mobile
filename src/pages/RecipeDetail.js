import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BackToHomeButton from '../components/BackToHomeButton';

function RecipeDetail() {
  const { id } = useParams();

  const recipes = {
    1: {
      name: 'Bolo de Cenoura',
      description: 'Delicioso bolo de cenoura com cobertura de chocolate.',
      img: 'https://example.com/bolo-cenoura.jpg',
    },
    2: {
      name: 'Pão de Queijo',
      description: 'Tradicional pão de queijo mineiro.',
      img: 'https://example.com/pao-queijo.jpg',
    },
    3: {
      name: 'Brigadeiro',
      description: 'Doce de chocolate feito com leite condensado.',
      img: 'https://example.com/brigadeiro.jpg',
    },
  };

  const recipe = recipes[id];
  
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Validação: comentário não pode estar vazio
    if (newComment.trim() === '') {
      setError('O comentário não pode estar vazio.');
      return;
    }

    // Adicionar comentário
    setComments([...comments, newComment]);
    setNewComment('');

    // Mostrar notificação de sucesso
    setNotification('Comentário enviado com sucesso!');
    setError('');

    // Limpar notificação após 3 segundos
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{recipe.name}</h1>
      <img
        src={recipe.img}
        alt={recipe.name}
        className="w-full rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-6">{recipe.description}</p>

      {/* Botão de Editar Receita */}
      <div className="mb-6 text-center">
        <Link to={`/edit-recipe/${id}`}>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Editar Receita
          </button>
        </Link>
      </div>

      {/* Seção de comentários */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Comentários</h2>

        {/* Lista de comentários */}
        <div className="mb-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded-lg mb-2 shadow-sm"
              >
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-500">Nenhum comentário ainda. Seja o primeiro!</p>
          )}
        </div>

        {/* Formulário de novo comentário */}
        <form onSubmit={handleCommentSubmit} className="bg-gray-50 p-4 rounded-lg shadow-md">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escreva seu comentário..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            Enviar Comentário
          </button>
        </form>

        {/* Notificação de sucesso */}
        {notification && (
          <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg">
            {notification}
          </div>
        )}
      </section>
      <BackToHomeButton /> {/* Adiciona o botão de voltar para Home */}
    </div>
  );
}

export default RecipeDetail;