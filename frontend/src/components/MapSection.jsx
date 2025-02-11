import React from 'react'

export const MapSection = () => {
  return (
    <section className='flex flex-col items-center'>
        <h1 className='p-5 text-3xl font-bold flex justify-center items-center'>Barberias en la zona</h1>
        <div className='w-[350px] h-[300px] md:h-[450px] md:w-[350px] lg:h-[500px] lg:w-[500px] bg-red-400 border-8 border-prymary mb-8'>
            {/*aca en este div ira el cosumo de la api del mapa*/}
        </div>
    </section>
  )
}

