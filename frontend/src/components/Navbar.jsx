import { useState } from "react";
import { MagnifyingGlassIcon, HomeIcon, Bars3Icon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-3 flex justify-end gap-4">
      <ul className="flex gap-3">
        <li>
          <MagnifyingGlassIcon className="w-8 h-8 text-white cursor-pointer md:hidden" />
        </li>
        <li>
          <HomeIcon className="w-8 h-8 text-white cursor-pointer" />
        </li>
        <li 
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <Bars3Icon className="w-8 h-8 text-white cursor-pointer" />

          {/* Menú desplegable */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-30 bg-white rounded-lg shadow-lg">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contacto</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Soporte</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">PQRS</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
