import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import SoftInput from "components/SoftInput"
import SoftButton from "components/SoftButton"
import React, { useEffect, useState } from "react"
import { Button } from "@mui/material"

const URL="http://localhost:5000/fetch/1111"



function Cart(){
    
    const [list,setList]=useState(['Cargando...']);
    
    useEffect(()=>{ 
        fetch(URL).then((response)=>{
            if(!response.ok){
                throw new Error('Error al obtener el carrito');
            }
            
            return response.json();
        })
        .then((carritouserlist)=>{
            
            setList(carritouserlist.list);
        })
        .catch((error)=>{
            console.error('Error al obtener los productos', error);
        })


    },[])
    const handleEdit=(index)=>{
        

    }
    
    return(
        <DashboardLayout>
            <div>
            <h1>Carrito</h1>
            </div>
            <div className="card-group">
                {list.map((name,index)=>(
                    <div className="card" key={index}>
                        <div className="card-header">
                            <p>{name}</p>
                        </div>
                        <div className="card-body">
                            <p>lorem ipsum</p>
                        </div>
                        <div className="author align-items-center">
                            <SoftButton onClick={handleEdit(index)}>Delete</SoftButton>
                        </div>


                    </div>

                ) ) }
                
                
                
            </div>

            



        </DashboardLayout>
        
        
    )
}

export default Cart