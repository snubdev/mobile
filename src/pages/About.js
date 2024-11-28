import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Quem Somos</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sobre o App de Receitas
        </h2>
        <p className="text-gray-700 mb-4">
          O <strong>Receitas Deliciosas</strong> é um aplicativo dedicado a amantes da culinária,
          onde você pode explorar receitas incríveis, compartilhar as suas próprias e
          interagir com outros apaixonados por gastronomia.
        </p>
        <p className="text-gray-700 mb-4">
          Nossa missão é tornar a cozinha um espaço de criatividade e diversão para todos,
          seja você um chef experiente ou um iniciante na arte de cozinhar. Descubra dicas,
          avalie receitas e crie seu próprio livro de receitas virtual.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
          Fale Conosco
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> contato@receitasdeliciosas.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Telefone:</strong> (11) 1234-5678
        </p>
        <p className="text-gray-700">
          <strong>Endereço:</strong> Rua das Receitas, 123 - Cozinha, SP
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Voltar para Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
