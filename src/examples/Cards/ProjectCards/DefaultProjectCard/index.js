/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import React, { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

<<<<<<< HEAD
function DefaultProjectCard({ image, label, title, description ,lugar, action ,ideEv,evento}) {
=======
function DefaultProjectCard({ image, label, title, description ,lugar, action ,ideEv}) {
>>>>>>> 254842092ecc31cc6d0da80f2ee8321e51afce8d

  const eliminarEvento = (eventoId) => {
    // Deshabilitar el icono para evitar clics múltiples
    const icono = document.getElementById('iconoEliminarEvento');
    icono.setAttribute('disabled', true);
  
    // Mostrar una alerta de confirmación
    const confirmarEliminar = window.confirm('¿Está seguro de eliminar este evento?',eventoId);
  
    if (confirmarEliminar) {
      // Si el usuario confirma la eliminación, enviar la solicitud DELETE
      fetch(`http://localhost:4000/eventos/${eventoId}`, { method: 'DELETE' })
        .then((response) => response.json())
        .then((data) => {
          // Mostrar un mensaje de éxito o realizar otras acciones necesarias
          alert(data.msg);
          // Recargar la página para reflejar los cambios
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          // Mostrar un mensaje de error o realizar otras acciones necesarias en caso de error
        })
        .finally(() => {
          // Habilitar nuevamente el icono después de completar la solicitud
          icono.removeAttribute('disabled');
        });
    } else {
      // Habilitar nuevamente el icono si el usuario cancela la eliminación
      icono.removeAttribute('disabled');
    }
  };


  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <SoftBox position="relative" width="400px" shadow="xs" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "400px",
            maxHeight :"400px",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </SoftBox>
      <SoftBox pt={3} px={0.5}>
        <SoftBox mb={1}>
          <SoftTypography
            variant="h5"
            textTransform="capitalize"
            textGradient
          >
            {label}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={1}>
          {action.type === "internal" ? (
            <SoftTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              { title}
            </SoftTypography>
          ) : (
            <SoftTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </SoftTypography>
          )}
        </SoftBox>
        <SoftBox mb={3} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Precio : {description}
          </SoftTypography>
          
        </SoftBox>

        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
             {lugar}
          </SoftTypography>
          
        </SoftBox>
        
  <Grid container spacing={0.1}>
  <Grid item xs={0} md={0}>
    <SoftBox mr={0} p={0}>
      <Button id="iconoEliminarEvento" color="secondary" onClick={() => eliminarEvento(ideEv)}>
        delete
      </Button>
    </SoftBox>
  </Grid>
  <Grid item xs={6} md={6}>
    <SoftButton variant="text" color="dark">
<<<<<<< HEAD
    <Link to={`/editar/${ideEv}`}>
        <Button>editadr</Button>
=======
      <Link to={`/ruta-de-edicion/${ideEv}`}>
        <Button>editar</Button>
>>>>>>> 254842092ecc31cc6d0da80f2ee8321e51afce8d
      </Link>
    </SoftButton>
  </Grid>
</Grid>
        
      </SoftBox>
      
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lugar : PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  
  ideEv : PropTypes.string.isRequired,
<<<<<<< HEAD
  evento: PropTypes.arrayOf(), // Lista de eventos
=======
>>>>>>> 254842092ecc31cc6d0da80f2ee8321e51afce8d
};

export default DefaultProjectCard;
