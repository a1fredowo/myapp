"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header'; // Importa el Header

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    router.push('/viaje'); // Redirige a la página de viaje después de iniciar sesión
  };

  return (
    <>
      <Header /> {/* Aquí se agrega el Header */}
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
        <p className="text-center mt-4">
          ¿No tienes cuenta? <a href="#" className="text-blue-600">Regístrate</a>
        </p>
      </div>
    </>
  );
}
