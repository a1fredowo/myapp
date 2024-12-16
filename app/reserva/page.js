'use client';

import { useState } from 'react';
import Header from '../components/header';
import { useRouter } from 'next/navigation';

export default function Reserva() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [necesidades, setNecesidades] = useState('');
  const router = useRouter();

  const reservarViaje = () => {
    const viajeDetails = { origen, destino, fecha, hora, tipoVehiculo, necesidades };
    localStorage.setItem('viajeDetails', JSON.stringify(viajeDetails));
    alert('Reserva de viaje realizada con éxito.');
    router.push('/checkout');
  };

  return (
    <>
      <Header /> {/* Agregamos el Header aquí */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reservar Viaje</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Origen */}
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
          
          {/* Destino */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Destino</label>
            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="¿A dónde deseas ir?"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          {/* Fecha */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Fecha de reserva</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Hora */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Hora de reserva</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          {/* Tipo de vehículo */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Tipo de vehículo</label>
            <select
              value={tipoVehiculo}
              onChange={(e) => setTipoVehiculo(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Seleccionar...</option>
              <option value="sedan">Sedán</option>
              <option value="suv">Camioneta</option>
              <option value="minivan">Minivan</option>
              <option value="furgon">Van</option>
            </select>
          </div>

          {/* Necesidades adicionales */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Necesidades especiales</label>
            <select
              value={necesidades}
              onChange={(e) => setNecesidades(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="vehiculo-con-rampa">Vehículo con rampa</option>
              <option value="asistencia">Asistencia personalizada</option>
              <option value="espacio-adicional">Espacio adicional</option>
            </select>
          </div>

          {/* Botón para realizar la reserva */}
          <button
            onClick={reservarViaje}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Reservar
          </button>
        </form>
      </div>
    </>
  );
}
