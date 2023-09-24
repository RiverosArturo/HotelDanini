import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Doble Matrimonial",
  informacion:
    "Habitación Doble Matrimonial con vista a la naturaleza que rodea nuestro hotel, ideal para usted y su familia, decorada al estilo colonial.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402545/habitaciones/dobleMatrimonial/doble2_jcfxbb.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402543/habitaciones/dobleMatrimonial/doble_x6qnoa.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402541/habitaciones/dobleMatrimonial/ba%C3%B1o2_tdvdam.jpg",
  ],
  precio: 1600,
  cupo: 4,
};

const tabla = {
  elemento: [
    "2 camas matrimoniales",
    'Pantalla 40"',
    "Internet inalámbrico",
    "Balcón",
    "Calefacción",
    "Secadora de cabello",
    "Room service",
  ],
};

export const DobleMatrimonial = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
