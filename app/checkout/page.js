"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from '../components/header';

export default function Checkout() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    agreeToTerms: false,
  });

  const [viajeDetails, setViajeDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Obtener los detalles del viaje desde el almacenamiento local o la API
    const details = JSON.parse(localStorage.getItem('viajeDetails'));
    setViajeDetails(details);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      // Procesar pago (simulado)
      console.log("Formulario enviado:", formData);
      router.push('/detalles');
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Detalles de tu viaje</h2>
        {viajeDetails ? (
          <div className="mb-4">
            <p><strong>Origen:</strong> {viajeDetails.origen}</p>
            <p><strong>Destino:</strong> {viajeDetails.destino}</p>
            <p><strong>Fecha:</strong> {viajeDetails.fecha}</p>
            <p><strong>Hora:</strong> {viajeDetails.hora}</p>
            <p><strong>Tipo de Vehículo:</strong> {viajeDetails.tipoVehiculo}</p>
            <p><strong>Necesidades:</strong> {viajeDetails.necesidades}</p>
            <p><strong>Precio:</strong> $10000</p>
          </div>
        ) : (
          <p>No hay detalles de viaje disponibles.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Datos de la tarjeta */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Información de Pago</h2>
              <div>
                <label htmlFor="cardNumber" className="block text-lg">Número de tarjeta</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="1234 5678 9876 5432"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="cardExpiry" className="block text-lg">Fecha caducidad</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="MM/AA"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardCvc" className="block text-lg ml-6">CVC</label>
                  <input
                    type="text"
                    id="cardCvc"
                    name="cardCvc"
                    className="w-full p-2 mt-9 border border-gray-300 rounded-md ml-6"
                    placeholder="123"
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Datos de facturación */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Datos de Facturación</h2>
              <div>
                <label htmlFor="name" className="block text-lg">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-lg">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Av. Libertador 1234"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-lg">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Santiago"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-lg">Código Postal</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="1234567"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-lg">País</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Chile"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Confirmación */}
          <div className="mb-8">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                className="h-5 w-5 border-gray-300 rounded-sm"
                checked={formData.agreeToTerms}
                onChange={() => setFormData((prev) => ({ ...prev, agreeToTerms: !prev.agreeToTerms }))}
              />
              <span className="text-sm text-gray-700">
                Acepto los{" "}
                <a href="/terms" className="text-blue-600 hover:text-blue-800">
                  términos y condiciones
                </a>
              </span>
            </label>
          </div>

          {/* Botón de Envío */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Confirmar Pago
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
