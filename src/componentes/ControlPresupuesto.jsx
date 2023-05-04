import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, setPresupuesto, gastos, setGastos, setPresupuestoValido}) => {
    
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const TotalGastado = gastos.reduce((total, gasto) =>  gasto.cantidad + total, 0)
        const TotalDisponible = presupuesto - TotalGastado
        
        //Calcular porcentaje en grafica
        const nuevoPorcentaje = ((( presupuesto - TotalDisponible ) / presupuesto ) * 100).toFixed(2)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1500)

        setDisponible(TotalDisponible)
        setGastado(TotalGastado)
    }, [gastos])


    const formatearCantidad = (cantidad) => {
       return cantidad.toLocaleString('en-US', 
       { style:"currency", 
       currency:"USD"
    })
    }

    const HandleResetApp = () => {
       const resultado = confirm("¿Deseas reiniciar la app de presupuesto y gastos?")

       if(resultado){
            setPresupuesto(0)
            setGastos([])
            setPresupuestoValido(false)
       }
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                        trailColor: "F5F5F5",
                        textColor: "#3B82F6"
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% gastado`}/>
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={HandleResetApp}>
                    Resetear app 
                </button>
                <p>
                    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? "negativo" : ""}`}>
                    <span>Disponible:</span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto