import {Navbar} from "./Navbar";
import logo from "../images/img1.jpg"; // Ruta de la imagen en `public`


export const Header = () => {
  return (
    <header className="h-35 bg-prymary flex p-3 gap-3">
      <img className='cursor-pointer h-10 w-10' src={logo} alt="logoBaberHub" />
      <h1 className="text-[20px] font-bold text-white items-center ">Barber Hub Medellín</h1>
      <div> 
        <Navbar />
      </div>
       
    </header>
  )
}

