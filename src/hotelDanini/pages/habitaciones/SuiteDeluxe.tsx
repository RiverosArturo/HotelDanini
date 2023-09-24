import { Habitacion, Tabla } from "../../components";

const habitacion = {
  nombre: "Suite Deluxe",
  informacion:
    "Habitación Suite Deluxe con vista a la naturaleza que rodea nuestro hotel, ideal para usted y su familia, decorada al estilo colonial. Prepárese para gozar de la mejor comodidad..",
  imgs: [
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402690/habitaciones/suiteDeluxe/suite_hd8yhc.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402693/habitaciones/suiteDeluxe/terraza_gt0sja.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694402686/habitaciones/suiteDeluxe/ba%C3%B1oS_nforsj.jpg",
    "https://res.cloudinary.com/dawwp31sm/image/upload/v1694412270/habitaciones/suiteDeluxe/ba%C3%B1oS2_sdb28w.jpg",
  ],
  precio: 2200,
  cupo: 4,
};

const tabla = {
  elemento: [
    "2 camas queen size",
    'Pantalla 40"',
    "Internet inalámbrico",
    "Terraza",
    "Calefacción",
    "Secadora de cabello",
    "Room service",
  ],
};

export const SuiteDeluxe = () => {
  return (
    <>
      <Habitacion habitacion={habitacion} />
      <Tabla tabla={tabla} />
    </>
  );
};
