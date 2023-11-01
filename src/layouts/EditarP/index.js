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
import input from "./input.css"
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
import { useState, useEffect, useMemo } from "react";


// Billing page components


import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

 
function Editar2() {
  
  let { id } = useParams();
  const [eventos, setEventos] = useState([]);
  
 




  const [usu, setUsu] = useState({});
 

  useEffect(() => {
    fetch("http://127.0.0.1:8000/obtener_usuario/?correo=azteca.integrador@gmail.com")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos obtenidos:", data); // Verifica los datos obtenidos
        console.log(id)
        setUsu(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de eventos:", error);
      });
  }, [id]);
  


 useEffect(() => {
    fetch(`http://localhost:4000/eventT/${id}`) // Utiliza la interpolación para incluir el ID dinámicamente
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Corrección en el uso de console.log
        setEventos(data); // Asegúrate de descomentar esta línea para almacenar los datos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener el evento:", error);
      });
  }, [id]); // Asegúrate de incluir `id` como dependencia en useEffect para que se ejecute cada vez que cambie el ID
  console.log(eventos); // Corrección en el uso de console.log




















  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();
  const [ubicacion, setUbicacion] = useState();
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [precio, setPrecio] = useState();
  const [cantidadBoletos, setCantidadBoletos] = useState();
  const [descripcion, setDescripcion] = useState();
  useEffect(() => {
    if (eventos) {
      setImagen(usu.foto2);
      setNombre(usu.nombres);
      setUbicacion(eventos.ubicacion);
      setFechaInicio(eventos.fechaInicio);
      setFechaFin(eventos.fechaFin);
      setPrecio(usu.telefono);
      setCantidadBoletos(eventos.cantidadBoletos);
      setDescripcion(eventos.descripcion);
    }
  }, [usu]);
  /*


 'nombre': usuario.nombre_usuario,
                'correo': usuario.correo_electronico,
                'foto2': usuario.foto2,
                'nombres': usuario.nombres,
                'apellidos': usuario.apellidos,
                'tipoidentificacion': usuario.tipo_identificacion,
                'numero': usuario.numero_identificacion,
                'fecha_nacimiento': usuario.fecha_nacimiento,
                'telefono': usuario.telefono,
                'ubicacion': usuario.ubicacion
  */
  const creacionF = new Date();
  const creacionFS = new Date();
  const handleImagenChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        console.log("URL generada:", imageUrl);
        setImagen(imageUrl); // Actualiza el estado de "imagen" con la nueva URL
      };
  
      reader.readAsDataURL(file);
    }
  };
 
  
  
  const handleTituloChange = (e) => {
    setNombre(e.target.value);
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
    console.log(imagen)
    e.preventDefault();
    
    fetch("http://127.0.0.1:8000/actualiazar_usuario/", {
      method: 'POST',
      body: JSON.stringify({
        correo: 'azteca.integrador@gmail.com',  // Asegúrate de incluir el correo aquí
        nuevo_nombre: 'Nuevo nombre',
        nueva_foto2: 'Nueva foto2',
        nuevos_nombres: 'Nuevos nombres',
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Datos obtenidos:", data);
    })
    .catch((error) => {
      console.error("Error al actualizar el usuario:", error);
    });
    
    

    
      };
    

   

    


  return (

    <DashboardLayout>
      <DashboardNavbar />
      <div style={{
        marginTop: '32px',
        backgroundColor: 'white',
        borderRadius: '32px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SoftBox component="form" role="form" style={{ display: 'flex' }}>
              {/* Columna izquierda */}
        <div style={{ flex: 1, paddingRight: '1rem' }}>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5} >
            <SoftTypography component="label" variant="caption" fontWeight="bold" >
              Usuario
            </SoftTypography>
          </SoftBox>
          <SoftInput type="titulo" placeholder={usu.nombre} onChange = {handleTituloChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Nombre
            </SoftTypography>
          </SoftBox>
      
          <SoftInput type="ubicacion" placeholder={usu.nombres} onChange = {handleUbicacionChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Apellido
            </SoftTypography>
          </SoftBox>
          <SoftInput type="precio" placeholder={usu.apellidos} onChange = {handlePrecioChange} />
        </SoftBox>
       
        </div>

        {/* Columna derecha (para la imagen) */}
        <div style={{ flex: 1, paddingLeft: '1rem' }}>
           {/* Cuadro alrededor de la imagen */}
           <div style={{
              display: 'flex',
              justifyContent: 'center', /* Centra horizontalmente */}}>
           <div style={{ border: '2px solid #ccc', 
           
            borderRadius: '10px', 
           marginTop: '16px', width: '300px', 
           height: '300px'  }}>
            
           <img src= {imagen}
           style={{ width: '100%', height: '100%' }}/> 
          </div>
          </div>
          <SoftBox mb={3} style={{display: 'flex',
              justifyContent: 'center'}}>
              <input type="file" placeholder="image" onChange={handleImagenChange}  className="input-file-hidden" id="archivo"
              />
              <SoftTypography component="label" fontWeight="bold" htmlFor="archivo" variant="h6" className="subirArch" color="white">
              <Icon sx={{ verticalAlign: '-2px' }}>upload</Icon>
              &nbsp;Seleccionar archivo</SoftTypography>
            </SoftBox>
         
        </div>
        
        </SoftBox>
        <SoftBox component="form" role="form" >
       
       
       
          <SoftButton variant="gradient" color="dark" onClick={handleSubmit}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;Editar
        </SoftButton>
      </SoftBox>
    </div>
    
    </DashboardLayout>
  );
}

export default Editar2;


  /* CreateP2.propTypes = {
 evento: PropTypes.arrayOf(
        PropTypes.shape({
          imagen: PropTypes.string,
          titulo: PropTypes.string,
          ubicacion: PropTypes.string,
          fechaInicio: PropTypes.string,
          fechaFin: PropTypes.string,
          precio: PropTypes.number,
          cantidadBoletos: PropTypes.number,
          descripcion: PropTypes.string,
          creacionF: PropTypes.instanceOf(Date),
        })
        
      ),
      evento: PropTypes.arrayOf(PropTypes.object).isRequired,*/

   /* imagen2: PropTypes.string,
    titulo2: PropTypes.string,
    ubicacion2: PropTypes.string,
    fechaInicio2: PropTypes.string,
    fechaFin2: PropTypes.string,
    precio2: PropTypes.number,
    cantidadBoletos2: PropTypes.number,
    descripcion2: PropTypes.string
    
  };,*/