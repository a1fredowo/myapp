"use client";

import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto px-4 mt-8">
        {/* Bienvenida */}
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="mb-6 text-lg">
          Transporte Inclusivo es una aplicación diseñada para mejorar la movilidad de personas con discapacidad. Nuestro objetivo es proporcionar un servicio de transporte accesible y cómodo para que todos puedan moverse por la ciudad de manera independiente y segura.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          onClick={() => (window.location.href = '/login')}
        >
          Comenzar
        </button>
        </div>

        {/* Viaje */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Viaje</h2>
            <p>Viaja a cualquier lugar con la app de Transporte Inclusivo. Solicita un viaje y relájate.</p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Detalles</button>
             <Link href="/viaje">
                <button className="bg-gray-300 text-black px-6 py-2 rounded-md">Viaja</button>
              </Link>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-64 rounded-md">
            {/* Placeholder para la imagen */}
            <img src="/img/img1.avif" alt="Imagen Ventas" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        
        {/* Viaje */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Reservas</h2>
            <p>Reserva tu viaje con anticipación para asegurar un transporte sin preocupaciones el día de tu cita.</p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Detalles</button>
              <Link href="/reserva">
                <button className="bg-gray-300 text-black px-6 py-2 rounded-md">Reserva</button>
              </Link>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-64 rounded-md">
            {/* Placeholder para la imagen */}
            <img src="/img/img2.jpg" alt="Imagen Reservas" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>



        {/* Conduce cuando quieras */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Conduce cuando quieras</h2>
            <p>Genera ganancias en tu propio tiempo con viajes. Usa tu propio auto o un vehículo de renta.</p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Detalles</button>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-64 rounded-md">
            {/* Placeholder para la imagen */}
            <img src="/img/img3.avif" alt="Imagen Conduce" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>

        {/* ¿Ya tienes cuenta? */}
        {/* ¿Ya tienes cuenta? */}
        <div className="text-center mb-8">
          <p className="text-lg">
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="text-blue-600">Iniciar sesión</a>
          </p>
        </div>
      </div>
    </>
  );
}
