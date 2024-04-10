import React from 'react'
import { useState } from 'react'
import '../estilos/barra.css'

const barra = () => {

  const [ tarea, setTarea] = useState("")

  return (
    <div className='barra'>
        <input type='text' onChange={e => setTarea(e.target.value)} value={tarea} />
        <button className='btn boton'/>
    </div>
  )
}

export default barra