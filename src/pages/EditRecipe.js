import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackToHomeButton from '../components/BackToHomeButton';

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulando os dados das receitas existentes
  const recipes = {
    1: { name: 'Bolo de Cenoura', description: 'Delicioso bolo com cobertura de chocolate' },
    2: { name: 'Pão de Queijo', description: 'Tradicional pão de queijo mineiro' },
    3: { name: 'Brigadeiro', description: 'Doce feito com leite condensado e chocolate' },
  };

  const recipe = recipes[id];

  const [name, setName] = useState(recipe ? recipe.name : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, name, description });
    alert('Receita atualizada com sucesso!');
    navigate(`/recipe/${id}`); // Redireciona para a página de detalhes da receita
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Editar Receita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da receita:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
            ></textarea>
          </label>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button type="submit">Salvar Alterações</button>
          <button
            type="button"
            style={{ marginLeft: '10px', backgroundColor: '#ccc' }}
            onClick={() => navigate(-1)} // Volta para a página anterior
          >
            Voltar
          </button>
        </div>
      </form>
      <BackToHomeButton /> {/* Adiciona o botão de voltar para Home */}
    </div>
  );
}

export default EditRecipe;