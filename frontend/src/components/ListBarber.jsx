import React from 'react';

export const ListBarber = () => {
  const barberShops = [
    {
      id: 1,
      name: "Status-Barbería",
      rating: 4.8,
      reviews: 76,
      address: "Cl. 80A #68-35",
      status: "Abierto",
      closingTime: "8 p.m.",
      image: "https://i.imgur.com/Z8PxzHa.jpeg"
    },
    {
      id: 2,
      name: "H&C Barber Shop",
      rating: 4.9,
      reviews: 79,
      address: "Cl. 31 #3-69",
      status: "Abierto",
      closingTime: "9 a.m. del mar",
      image: "https://i.imgur.com/3z6Oq0y.jpeg"
    },
    {
      id: 3,
      name: "Sativa Barber",
      rating: 4.8,
      reviews: 37,
      address: "050042",
      status: "Abierto",
      closingTime: "8:30 p.m.",
      image: "https://i.imgur.com/Nz24n3B.jpeg"
    }
  ];

  return (
    <aside className="md:w-[250px] bg-white shadow-lg p-4 lg:w-[300px] xl:w-[600px] scrol">
      <h2 className="text-xl font-bold mb-4">Resultados</h2>
      {barberShops.map((barber) => (
        <div key={barber.id} className="flex justify-between items-center border-b py-4">
          {/* Contenedor de texto */}
          <div className="text-left w-3/4">
            <h3 className="font-semibold text-lg">{barber.name}</h3>
            <p className="text-yellow-500 font-bold text-sm">
              {"★".repeat(Math.round(barber.rating))} {barber.rating} ({barber.reviews})
            </p>
            <p className="text-gray-600 text-sm">{barber.address}</p>
            <p className="text-green-500 text-sm">{barber.status} • Cierra a las {barber.closingTime}</p>
          </div>
          {/* Imagen */}
          <img 
            src={barber.image}
            alt={barber.name}
            className="w-20 h-20 md:w-24 md:h-24 md:p-6 lg:p-4 object-cover rounded-lg"
          />
        </div>
      ))}
    </aside>
  );
};
