import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackToHomeButton() {
  const navigate = useNavigate();

  return (
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
      onClick={() => navigate('/')}
    >
      Voltar para Home
    </button>
  );
}

export default BackToHomeButton;