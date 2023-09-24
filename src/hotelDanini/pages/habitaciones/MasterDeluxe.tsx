import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Master Deluxe",
  informacion:
    "Habitación Master Deluxe con vista a la naturaleza que rodea nuestro hotel, ideal para usted y su familia, decorada al estilo colonial. Prepárese para gozar de la mejor comodidad.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402609/habitaciones/masterDeluxe/master2_rzrba3.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402613/habitaciones/masterDeluxe/mSala_sr2h6a.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402607/habitaciones/masterDeluxe/master_kcy6q8.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402611/habitaciones/masterDeluxe/mComedor_hhviok.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402604/habitaciones/masterDeluxe/ba%C3%B1oM_ev9bta.jpg",
  ],
  precio: 2800,
  cupo: 4,
};

const tabla = {
  elemento: [
    "2 camas queen size",
    "2 recamaras",
    "2 baños",
    "Sala",
    "Comedor",
    "Microondas",
    "Cafetera",
    'Pantalla 40"',
    "Internet inalámbrico",
    "Balcón",
    "Calefacción",
    "Secadora de cabello",
    "Room service",
  ],
};

export const MasterDeluxe = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
