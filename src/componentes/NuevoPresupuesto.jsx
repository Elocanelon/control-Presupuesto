import { useState } from "react"
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setPresupuestoValido}) => {
   
   const [ mensaje, setMensaje ] = useState('')
   
   
    const handleSubmit = (e) => {
        e.preventDefault()

            if(!presupuesto || presupuesto < 0){
                setMensaje("No es un presupuesto Valido")
            
                return
            
            } 

            console.log(typeof(presupuesto))
            setMensaje("")
            setPresupuestoValido(true)


    }

    return(
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="presupuesto">Definir presupuesto</label>
                    <input type="number" className="nuevo-presupuesto" placeholder="Añade tu presupuesto" value={(presupuesto)} onChange={e => (setPresupuesto(Number(e.target.value)))}/>
                </div>

                <input type="submit" value="Añadir" /> 

                {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}   
            </form>
        </div>
    )
}

export default NuevoPresupuesto