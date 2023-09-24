import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "King Size",
  informacion:
    "Habitación King Size con vista a la naturaleza que rodea nuestro hotel, ideal para usted y su pareja, decorada al estilo colonial.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402577/habitaciones/kingSize/king2_tgkkop.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402575/habitaciones/kingSize/king_yynfvt.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402573/habitaciones/kingSize/ba%C3%B1o_fwyafj.jpg",
  ],
  precio: 1200,
  cupo: 2,
};

const tabla = {
  elemento: [
    "Cama king size",
    'Pantalla 40"',
    "Internet inalámbrico",
    "Balcón",
    "Calefacción",
    "Secadora de cabello",
    "Room service",
  ],
};

export const KingSize = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
