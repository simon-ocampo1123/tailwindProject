import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { MapSection } from "./components/MapSection";
import { ListBarber } from "./components/ListBarber";

export const App = () => {
  return (
    <div className="min-h-screen bg-heroPattern flex flex-col">
      {/* Header */}
      <Header />
      {/* Contenedor Principal */}
      <main className="mt-4 md:mt-12 flex flex-col md:flex-row md:h-screen w-full md:pl-4 md:py-4 p-6 overflow-hidden">
        
        {/* 🏠 Lista de barberías (Izquierda) */}
        <div className="hidden md:block w-full md:w-1/3 md:py-20 h-full overflow-y-auto py-40">
          <ListBarber />
        </div>

        {/* 🗺️ Mapa (Centro) */}
        <div className="w-full md:w-5/12 h-full flex justify-center items-center">
          <MapSection className="w-full h-full" />
        </div>

        {/* 🔑 Formulario de inicio de sesión (Derecha) */}
        <div className="w-full md:w-1/4 h-full flex justify-center items-center p-4 pb-4">
          <LoginForm className="w-full max-w-sm" />
        </div>
      </main>
    </div>
  );
};
