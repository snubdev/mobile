import React, { useState } from 'react';
import '../App.css';
import BackToHomeButton from '../components/BackToHomeButton';

function AddRecipe() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description });
    alert('Receita adicionada!');
  };

  return (
    <div>
      <h1>Adicionar nova receita</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
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
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Salvar</button>
      </form>
      <BackToHomeButton /> {/* Adiciona o botão de voltar para Home */}
    </div>
  );
}

export default AddRecipe;
