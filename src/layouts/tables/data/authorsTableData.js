/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import andres from "assets/images/cepeda.jpg";
import eladio from "assets/images/eladio.jpg";
import penyair from "assets/images/penyair.jpg";
import taylor from "assets/images/taylor.jpg";
import bogota from "assets/images/medellin.jpg";
import manuel from "assets/images/manuel.jpg";


function Artista({ image, name, tipo }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {tipo}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Evento({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const artistsTableData = {
  columns: [
    { name: "artista", align: "left" },
    { name: "evento", align: "left" },
    { name: "status", align: "center" },
    { name: "fecha", align: "center" },
    { name: "comprar", align: "center" },
  ],

  rows: [
    {
      artista: <Artista image={andres} name="Andrés Cepeda" tipo="Concierto" />,
      evento: <Evento job="Movistar Arena" org="Bogotá" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="En venta" color="success" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          12/12/23
        </SoftTypography>
      ),
      comprar: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      artista: <Artista image={eladio} name="Eladio Carrión" tipo="concierto" />,
      evento: <Evento job="Diamante de Sóftbol" org="Cali" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="SOLD OUT" color="secondary" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          01/02/24
        </SoftTypography>
      ),
      comprar: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      artista: <Artista image={bogota} name="Orquesta Sinfónica Nacional de Colombia" tipo="Recital" />,
      evento: <Evento job="Conservatorio nacional" org="Bogotá" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="En venta" color="success" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          18/12/23
        </SoftTypography>
      ),
      comprar: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      artista: <Artista image={taylor} name="Taylor Swift" tipo="Concierto" />,
      evento: <Evento job="Estadio Nemecio Camacho 'El campín' " org="Bogotá" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="SOLD OUT" color="secondary" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          01/08/24
        </SoftTypography>
      ),
      comprar: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      artista: <Artista image={penyair} name="Penyair" tipo="Concierto" />,
      evento: <Evento job="Estadio de Fútbol Atanasio Girardot" org="Medellín" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="En venta" color="success" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          05/01/24
        </SoftTypography>
      ),
      comprar: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      artista: <Artista image={manuel} name="Manuel Medrano" tipo="Concierto" />,
      evento: <Evento job="Movistar Arena" org="Bogotá" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="En venta" color="success" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          17/01/23
        </SoftTypography>
      ),
      comprar: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};

export default artistsTableData;
