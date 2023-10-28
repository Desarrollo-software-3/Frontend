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



// @mui material components
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import axios from "axios";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import { useState } from "react";


 const evento = {
    imagen: "",
    titulo: "",
    ubicacion: "",
    fechaInicio: "",
    fechaFin: "",
    precio: 0,
    cantidadBoletos: 0,
    descipcion: "",
    creacionF: new Date(),
  
  }

function CreateP() {

  const [imagen, setImagen] = useState('https://gogocatrina.com/wp-content/uploads/2023/10/Fallout-de-Prime-Video-400x256@2x.jpg');
  const [titulo, setTitulo] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [precio, setPrecio] = useState(0);
  const [cantidadBoletos, setCantidadBoletos] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const creacionF = new Date();
  const creacionFS = new Date();
  const handleImagenChange = (e) => {
    setImagen(e.target.value);
  };
  
  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };
  
  const handleUbicacionChange = (e) => {
    setUbicacion(e.target.value);
  };
  
  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };
  
  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };
  
  const handlePrecioChange = (e) => {
    setPrecio(e.target.value);
  };
  
  const handleCantidadBoletosChange = (e) => {
    setCantidadBoletos(e.target.value);
  };
  
  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    axios.post("http://localhost:4000/api/proyect", {imagen, 
    titulo, ubicacion,fechaInicio,fechaFin,precio,
    cantidadBoletos, descripcion, creacionF})
    .then(async () => {
      // Manejo de errores en caso de que falle la solicitud al backend
      alert("registrado correctamente");
     // window.location.href = "/contact";

    })
    .catch(async (error) => {
      console.log(error);
      // Manejo de errores en caso de que falle la solicitud al backend
      alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    });

    
      };
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5} >
            <SoftTypography component="label" variant="caption" fontWeight="bold" >
              Titulo
            </SoftTypography>
          </SoftBox>
          <SoftInput type="titulo" placeholder="Titulo" onChange = {handleTituloChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Ubicacion
            </SoftTypography>
          </SoftBox>
          <SoftInput type="ubicacion" placeholder="ubicacion" onChange = {handleUbicacionChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Fecha De Inicio
            </SoftTypography>
          </SoftBox>
          <SoftInput type="FechaI" placeholder="Fecha de inicio" onChange = {handleFechaInicioChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Fecha de fin
            </SoftTypography>
          </SoftBox>
          <SoftInput type="fechaF" placeholder="Fechac  de fin" onChange = {handleFechaFinChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Precio
            </SoftTypography>
          </SoftBox>
          <SoftInput type="precio" placeholder="Precio" onChange = {handlePrecioChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Boletos disponibles
            </SoftTypography>
          </SoftBox>
          <SoftInput type="boletos" placeholder="boletos" onChange = {handleCantidadBoletosChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Descripcion
            </SoftTypography>
          </SoftBox>
          <SoftInput type="descripcion" placeholder="Descripcion" onChange = {handleDescripcionChange} />
        </SoftBox>
        
          <SoftButton variant="gradient" color="dark" onClick={handleSubmit}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;Crear proyecto
        </SoftButton>
      </SoftBox>
    
    </DashboardLayout>
  );
}

export default CreateP;
