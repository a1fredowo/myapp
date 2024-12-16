"use client";

import Header from '../components/header';

export default function Perfil() {
  return (
    <>
      <Header />
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Mi Perfil</h2>
        <p className="mb-2">Nombre: Usuario Ejemplo</p>
        <p className="mb-2">Email: ejemplo@correo.com</p>
        <p className="mb-4">Historial de viajes: 10</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Editar Perfil
        </button>
      </div>
    </>
  );
}
