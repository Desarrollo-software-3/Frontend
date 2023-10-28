/**
Eventos Creados 
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";



import React, { useEffect, useState } from "react";



function Overview() {
  const [eventos, setEventos] = useState([]);
  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', options);
  };
  useEffect(() => {
    // Realizar la solicitud GET al servidor para obtener la lista de eventos
    fetch("http://localhost:4000/eventoscreados") // Asegúrate de usar la URL correcta
      .then((response) => response.json())
      .then((data) => {
        // Los datos de eventos se almacenan en el estado
        setEventos(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de eventos:", error);
      });
  }, []);

  const eliminarEvento = (eventoId) => {
    // Deshabilitar el icono para evitar clics múltiples
    const icono = document.getElementById('iconoEliminarEvento');
    icono.setAttribute('disabled', true);
  
    // Mostrar una alerta de confirmación
    const confirmarEliminar = window.confirm('¿Está seguro de eliminar este evento?');
  
    if (confirmarEliminar) {
      // Si el usuario confirma la eliminación, enviar la solicitud DELETE
      fetch(`/eventos/${eventoId}`, { method: 'DELETE' })
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
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList title="conversations" profiles={profilesListData} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
  <Card>
    <SoftBox pt={2} px={2}>
      <SoftBox mb={3}> {/* Estableciendo un margen común para todos los SoftBox dentro */}
        <SoftTypography variant="h6" fontWeight="medium">
          Projects
        </SoftTypography>
      </SoftBox>
      <SoftBox mb={3}> {/* Estableciendo un margen común para todos los SoftBox dentro */}
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Architects design houses
        </SoftTypography>
      </SoftBox>
    </SoftBox>

    <SoftBox mb={3}> {/* Estableciendo un margen común para todos los elementos dentro */}
      <Grid container spacing={2}>
        {eventos.map((evento, index) => (
          <Grid item xs={12} md={6} xl={4} key={index}>
            <DefaultProjectCard
              image={evento.imagen}
              label={`${evento.titulo}`}
              title={formatDate(evento.creacionF)}
              description={evento.precio}
              lugar={evento.ubicacion}
              action={{
                type: 'internal',
                route: '/pages/profile/profile-overview',
                color: 'info',
                label: 'view project',
              }}
              authors={evento.nombre}
              ideEv={evento._id}
            />
          </Grid>
        ))}
        
      </Grid><Grid item xs={12} md={6} xl={3}>
          <PlaceholderCard title={{ variant: "h10", text: "NUEVO EVENTO" }} outlined />
        </Grid>
    </SoftBox>
  </Card>
</SoftBox>


      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
