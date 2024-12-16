import Link from 'next/link';

export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <h1 className="text-2xl font-semibold cursor-pointer hover:text-blue-400">
            Transporte Inclusivo
          </h1>
        </Link>
          <nav className="flex space-x-6">
            <a href="/viaje" className="hover:underline">Solicitar Viaje</a>
            <a href="/reserva" className="hover:underline">Reservar Viaje</a>
            <a href="/perfil" className="hover:underline">Perfil</a>
          </nav>
        </div>
      </header>
    );
  }
  