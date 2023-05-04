import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto, presupuestoValido, setPresupuestoValido, gastos, setGastos}) => {
    return(
        <div>
            <header>
                <h1>Planificador de gastos</h1>

                {presupuestoValido ? (
                    <div>
                       <ControlPresupuesto 
                            presupuesto={presupuesto}
                            gastos={gastos} 
                            setGastos = {setGastos}
                            setPresupuesto = {setPresupuesto}
                            setPresupuestoValido = {setPresupuestoValido}
                            />
                    </div>
                ) : (
                <NuevoPresupuesto
                    presupuesto = {presupuesto}
                    setPresupuesto = {setPresupuesto} 
                    setPresupuestoValido = {setPresupuestoValido}/>)
                    }

                
            </header>
        </div>
    )
}

export default Header 