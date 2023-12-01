/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";

// Images
import logoTeatro from "assets/images/small-logos/teatro.svg";
import logoFutbol from "assets/images/small-logos/futbol.svg";
import logoVino from "assets/images/small-logos/vino.svg";
import logoCultura from "assets/images/small-logos/cultura.svg";

function Disponibilidad({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

const comprar = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const eventosTableData = {
  columns: [
    { name: "evento", align: "left" },
    { name: "precio", align: "left" },
    { name: "status", align: "left" },
    { name: "disponibilidad", align: "center" },
    { name: "comprar", align: "center" },
  ],

  rows: [
    {
      evento: [logoFutbol, "Millonarios vs América"],
      precio: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $150
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          En venta
        </SoftTypography>
      ),
      disponibilidad: <Disponibilidad value={60} color="info" />,
      comprar,
    },
    {
      evento: [logoTeatro, "El cisne negro"],
      precio: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $75
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          En venta
        </SoftTypography>
      ),
      disponibilidad: <Disponibilidad value={100} color="success" />,
      comprar,
    },
    {
      evento: [logoTeatro, "Romeo y Julieta"],
      precio: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $35
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          Últimas boletas
        </SoftTypography>
      ),
      disponibilidad: <Disponibilidad value={30} color="error" />,
      comprar,
    },
    {
      evento: [logoFutbol, "Nacional vs D.I.M"],
      precio: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $180
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          SOLD OUT
        </SoftTypography>
      ),
      disponibilidad: <Disponibilidad value={0} color="error" />,
      comprar,
    },
    {
      evento: [logoVino, "Cata de vinos Cali"],
      precio: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $20
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          En venta
        </SoftTypography>
      ),
      disponibilidad: <Disponibilidad value={80} color="info" />,
      comprar,
    },
    {
      evento: [logoCultura, "Festival cultural Ucraniano"],
      precio: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $10
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          En venta
        </SoftTypography>
      ),
      disponibilidad: <Disponibilidad value={100} color="success" />,
      comprar,
    },
  ],
};

export default eventosTableData;
