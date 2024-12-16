"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header'; // Importa el Header

export default function Viaje() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [necesidades, setNecesidades] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState(''); // Estado para el tipo de vehículo
  const router = useRouter();

  const solicitarViaje = (e) => {
    e.preventDefault();
    const viajeDetails = { origen, destino, necesidades, tipoVehiculo };
    localStorage.setItem('viajeDetails', JSON.stringify(viajeDetails));
    alert('Viaje solicitado con éxito.');
    router.push('/checkout'); // Puedes cambiar la ruta según lo que necesites
  };

  return (
    <>
      <Header /> {/* Aquí agregamos el Header */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Solicitar Viaje</h2>
        <form onSubmit={solicitarViaje}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Origen</label>
            <input
              type="text"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              placeholder="Ingresa tu ubicación actual"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Destino</label>
            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="¿A dónde quieres ir?"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Tipo de Vehículo</label>
            <select
              value={tipoVehiculo}
              onChange={(e) => setTipoVehiculo(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Seleccionar...</option>
              <option value="sedan">Sedán</option>
              <option value="camioneta">Camioneta</option>
              <option value="minivan">Minivan</option>
              <option value="van">Van</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Necesidades</label>
            <select
              value={necesidades}
              onChange={(e) => setNecesidades(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Seleccionar...</option>
              <option value="vehiculo-con-rampa">Vehículo con rampa</option>
              <option value="asistencia">Asistencia personalizada</option>
              <option value="espacio-adicional">Espacio adicional</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Solicitar Viaje
          </button>
        </form>
      </div>
    </>
  );
}
