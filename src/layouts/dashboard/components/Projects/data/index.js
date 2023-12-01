// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoRap from "assets/images/small-logos/rap.svg";
import logoRock from "assets/images/small-logos/rock.svg";
import logoAcustic from "assets/images/small-logos/acustic.svg";
import logoDisco from "assets/images/small-logos/disco.svg";
import logoClassic from "assets/images/small-logos/classic.svg";
import logoOrquesta from "assets/images/small-logos/orquesta.svg";
import penyair from "assets/images/penyair.jpg";
import oblivions from "assets/images/oblivions.jpg";
import rufino from "assets/images/rufino.jpg";
import nanpa from "assets/images/nanpa.jpg";
import mana from "assets/images/mana.jpg";
import kraken from "assets/images/kraken.jpg";
import chopin from "assets/images/chopin.jpg";
import vivaldi from "assets/images/vivaldi.jpg";
import cepeda from "assets/images/cepeda.jpg";
import manuel from "assets/images/manuel.jpg";
import santiago from "assets/images/santiago.jpg";
import pablo from "assets/images/pablo.jpg";
import abba from "assets/images/abba.jpg";
import medellin from "assets/images/medellin.jpg";
import bogota from "assets/images/bogota.jpg";

export default function data() {
  const avatars = (Invitados) =>
    Invitados.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Festivales", align: "left" },
      { name: "Invitados", align: "left" },
      { name: "Precio", align: "center" },
      { name: "Restantes", align: "center" },
    ],

    rows: [
      {
        Festivales: [logoRap, "Festival de rap"],
        Invitados: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [penyair, "Penyair"],
              [oblivions, "Oblivion's Mighty Trash"],
              [rufino, "Mañas Rufino"],
              [nanpa, "Nanpa Básico"],
            ])}
          </SoftBox>
        ),
        Precio: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $80
          </SoftTypography>
        ),
        Restantes: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={60} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        Festivales: [logoRock, "Festival de rock"],
        Invitados: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [mana, "Maná"],
              [kraken, "Kraken"],
            ])}
          </SoftBox>
        ),
        Precio: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $180
          </SoftTypography>
        ),
        Restantes: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={10} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        Festivales: [logoClassic, "Festival de música clásica"],
        Invitados: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [chopin, "Chopin"],
              [vivaldi, "Vivaldi"],
            ])}
          </SoftBox>
        ),
        Precio: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $100
          </SoftTypography>
        ),
        Restantes: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        Festivales: [logoAcustic, "Festival de guitarra"],
        Invitados: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [cepeda, "Andrés Cepeda"],
              [manuel, "Manuel Medrano"],
              [pablo, "Pablo Alborán"],
              [santiago, "Santiago Cruz"],
            ])}
          </SoftBox>
        ),
        Precio: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $200
          </SoftTypography>
        ),
        Restantes: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        Festivales: [logoDisco, "Festival de música Disco"],
        Invitados: (
          <SoftBox display="flex" py={1}>
            {avatars([[abba, "Abba"]])}
          </SoftBox>
        ),
        Precio: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $120
          </SoftTypography>
        ),
        Restantes: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={25} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        Festivales: [logoOrquesta, "Festival de Orquestas"],
        Invitados: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [medellin, "Orquesta Sinfónica Nacional de Colombia"],
              [bogota, "Orquesta Filarmónica de Bogotá"],
            ])}
          </SoftBox>
        ),
        Precio: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $90
          </SoftTypography>
        ),
        Restantes: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={40} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
    ],
  };
}
