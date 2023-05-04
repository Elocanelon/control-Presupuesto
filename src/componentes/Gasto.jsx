import {
        LeadingActions,
        SwipeableList,
        SwipeableListItem,
        SwipeAction,
        TrailingActions
} from "react-swipeable-list"

import "react-swipeable-list/dist/styles.css"

import { formatearFecha } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoGastos from "../img/icono_gastos.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSuscripcion from "../img/icono_suscripciones.svg"
import IconoOcio from "../img/icono_ocio.svg"

const Gasto = ({gasto, setGastoEditar, eliminarGastos}) => {

    const diccionarioIconos = {
        ahorro : IconoAhorro,
        casa : IconoCasa,
        comida : IconoComida,
        gastos : IconoGastos,
        entretenimieto: IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripcion

    }
    
    const {nombre, cantidad, categoria, id, fecha} = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>

    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => eliminarGastos(id)} destructive={true}>
                Eliminando
            </SwipeAction>
        </TrailingActions>
    )
   
    return(
      <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={diccionarioIconos[categoria]} alt="Icono gastos" />
                        <div className="descripcion-gasto">
                            <p className="categoria">{categoria}</p>
                            <p className="nombre-gasto">{nombre}</p>
                            <p className="fecha-gasto">Agregado el: {''}<span>{formatearFecha(fecha)}</span></p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${cantidad}</p>
            </div>
        </SwipeableListItem>
       </SwipeableList>
       )
}

export default Gasto 