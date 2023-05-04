import { useEffect, useState } from 'react'
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import Header from './componentes/Header'
import IconoNuevo from "./img/nuevo-gasto.svg"
import Modal from './componentes/Modal';
import { generarId } from './helpers';
import ListadoGastos from './componentes/ListadoGastos';
import Filtros from './componentes/filtros'


function App() {
  
  
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto") ?? 0
  );
  const [presupuestoValido, setPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
  )
  const [gastoEditar, setGastoEditar] = useState([])
  const [filtro, setFiltro] = useState("")
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  
   
  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        setModal(true)
    

    setTimeout(() => {
        setAnimarModal(true)
        
    }, 500)
      }
  }, [gastoEditar])
  
 useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0)
}, [presupuesto])

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])

useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0){
      setPresupuestoValido(true)
    }
}, [])
   
 const handleSubmit = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
        setAnimarModal(true)
        
    }, 500)
  }

  const eliminarGastos = id => {
    const gastoEliminado = gastos.filter(gasto => gasto.id !== id)

   setGastos(gastoEliminado)
  }

  const guardarGastos = gasto => {
    if(gasto.id){
      //Editar
      const gastoActualizado = gastos.map( gastoState => gastoEditar.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizado) 
      setGastoEditar({})
    } else {
      //Nuevo registro 
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setTimeout(() => {
      setModal(false)
  }, 1500)
    
  }

  return (
    <div className={modal ? "fijar" : ""}>
     
       <Header 
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}
            presupuestoValido = {presupuestoValido}
            setPresupuestoValido = {setPresupuestoValido}
            gastos = {gastos}
            setGastos = {setGastos}
            />
    
    {presupuestoValido && (
      <>
        <main>
          <Filtros 
              filtro={filtro}
              setFiltro={setFiltro} />

          <ListadoGastos 
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGastos={eliminarGastos}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}/>
        </main>
        <div className='nuevo-gasto'>
          <img 
            src={IconoNuevo}
            alt="Icono nuevo gasto"
            onClick={handleSubmit}
            />
        </div>
      </>
    )}
    
    {modal && 
            <Modal 
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGastos={guardarGastos}
                gastoEditar ={gastoEditar}
                setGastoEditar={setGastoEditar}/>
                }
    </div>

  )
}

export default App
