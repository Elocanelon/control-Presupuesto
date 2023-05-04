const Filtros = ({filtro, setFiltro}) => {
 return(
   <div className="filtros sombras contenedor">
        <form value={filtro} onChange={e => setFiltro(e.target.value)}>
            <div className="campo">
                <label>Filtrar gastos</label>
                <select>
                    <option value="">-- Todas las categorias --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="salud">Salud</option>
                    <option value="gastos ">Gastos Varios</option>
                    <option value="entretenimieto">Entretenimiento</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
   </div>
 )   
}

export default Filtros