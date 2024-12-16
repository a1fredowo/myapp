'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { useRouter } from 'next/navigation';

export default function Detalles() {
  const [viajeDetails, setViajeDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Obtener los detalles del viaje desde el almacenamiento local
    const details = JSON.parse(localStorage.getItem('viajeDetails'));
    setViajeDetails(details);
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Pago realizado</h2>
        <p className="text-center mb-4">Tu conductor está en camino</p>
        {viajeDetails ? (
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Detalles de tu viaje</h3>
            <p><strong>Origen:</strong> {viajeDetails.origen}</p>
            <p><strong>Destino:</strong> {viajeDetails.destino}</p>
            <p><strong>Fecha:</strong> {viajeDetails.fecha}</p>
            <p><strong>Hora:</strong> {viajeDetails.hora}</p>
            <p><strong>Tipo de Vehículo:</strong> {viajeDetails.tipoVehiculo}</p>
            <p><strong>Necesidades:</strong> {viajeDetails.necesidades}</p>
            <h3 className="text-xl font-bold mt-4 mb-2">Detalles del auto</h3>
            <p><strong>Modelo:</strong> Toyota Hiace Cargo</p>
            <p><strong>Color:</strong> Blanco</p>
            <p><strong>Placa:</strong> ABC-1234</p>
            <h3 className="text-xl font-bold mt-4 mb-2">Mapa</h3>
            <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
              <img src="/img/img4.png" alt="Mapa" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        ) : (
          <p>No hay detalles de viaje disponibles.</p>
        )}
      </div>
    </>
  );
}