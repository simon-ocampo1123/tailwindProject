import React from 'react'

export const LoginForm = () => {
  return (
    <div className=" flex flex-col items-center h-[400px] mb-[100px] md:h-[400px] md:w-[600px] md:p-6 bg-white border-4 border-prymary rounded-3xl p-4">
        <input type="text" placeholder="Usuario o Correo electrónico" className="w-[220px] p-2 mb-4 border-4 border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-900" />
        <input type="password" placeholder="Contraseña" className="w-[220px] p-2 mb-4 border-4 border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-900" />
    
        <button className="w-[220px] bg-prymary text-white font-bold py-2 rounded-lg mb-2 ">
            Iniciar Sesión
        </button>
    
        <p className="mb-4 text-red-600 text-sm text-center cursor-pointer hover:underline">Olvide mi contraseña</p>
    
        <button className="w-[150px] h-18 mb-6 bg-prymary text-white font-bold py-2 rounded-lg my-2">
            Crear cuenta nueva
        </button>
    
        <button className="w-[220px] bg-blue-900 text-white font-bold py-2 rounded-lg ">
            Registrar mi Barbería
        </button>
  </div>
  )
}

