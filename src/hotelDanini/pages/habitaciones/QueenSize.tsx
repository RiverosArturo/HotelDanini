import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Queen Size",
  informacion:
    "Habitación Queen Size con vista a la naturaleza que rodea nuestro hotel, ideal para usted y su pareja, decorada al estilo colonial.",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402655/habitaciones/queenSize/queen2_xe497t.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402652/habitaciones/queenSize/queen_ay0ymz.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402650/habitaciones/queenSize/ba%C3%B1o_etyjbf.jpg",
  ],
  precio: 900,
  cupo: 2,
};

const tabla = {
  elemento: [
    "Cama queen size",
    'Pantalla 40"',
    "Internet inalámbrico",
    "Balcón",
    "Calefacción",
    "Secadora de cabello",
    "Room service",
  ],
};

export const QueenSize = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
