import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import SoftInput from "components/SoftInput"
import SoftButton from "components/SoftButton"
import React, { useEffect, useState } from "react"
import { Button } from "@mui/material"


const emailCookie = document.cookie.split(';').find(cookie => cookie.includes('emailA'));
const userEmail = emailCookie ? emailCookie.split('=')[1] : null;

const URL="http://34.41.66.81/fetch/"+userEmail



function Cart(){
    
    const [list,setList]=useState(['Cargando...']);
    const [eventDictionary, setEventDictionary] = useState({});
    const [foundEvent, setFoundEvent] = useState(null);
    
    useEffect(()=>{ 
        fetch(URL).then((response)=>{
            if(!response.ok){
                throw new Error('Error al obtener el carrito');
            }
            
            return response.json();
        })
        .then((carritouserlist)=>{
            console.log("entró")
            setList([carritouserlist.list]);
            const itemsArray = carritouserlist.list.split(',');
            setList(itemsArray);
        })
        .catch((error)=>{
            console.error('Error al obtener los productos', error);
        })
        console.log("----------")
        console.log(list)


    },[])
    useEffect(() => {
        fetch("http://34.170.199.27/eventoscreados")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener los eventos creados');
                }

                return response.json();
            })
            .then((allEvents) => {
                // console.log("Entró");
                setEventDictionary(allEvents);
                
            })
            .catch((error) => {
                console.error('Error al obtener los eventos creados', error);
            });
    }, []);

    const eventArray = Object.values(eventDictionary);
    const filtrados = eventArray.filter(evento => list.includes(evento._id))
    console.log(filtrados)


    
    return(
        <DashboardLayout>
            <div>
            <h1>Carrito</h1>
            </div>
            <div className="card-group">
                {filtrados.map(evento=>(
                    <div className="card" key={evento._id} style={{ border: '2px solid black',borderRadius: '5%', padding: '10px', margin: '10px' }}>
                        <center>
                        <img src={evento.imagen} alt={evento.titulo} />
                        <h3>{evento.titulo}</h3>
                        <p>Ubicación: {evento.ubicacion}</p>
                        <p>Fecha de Inicio: {evento.fechaInicio}</p>
                        <p>Fecha de Fin: {evento.fechaFin}</p>
                        <p>Precio: {evento.precio}</p>
                        <p>Cantidad de Boletos: {evento.cantidadBoletos}</p>
                        <div className="author align-items-center">
                            <SoftButton>Delete</SoftButton>
                        </div>
                        </center>


                    </div>

                ) ) }
                
                
                
            </div>

            



        </DashboardLayout>
        
        
    )
}

export default Cart