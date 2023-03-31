import React from 'react'
import Cabecalho from './Cabecalho'
import { Rodape } from './Rodape'

const Pagina = () => {
  return (
   <>
    <Cabecalho/>
    <div className='bg-secondary text-white py-3 text-center mb-3'> 
    <h1>
      Pagina Inicial
    </h1>
   </div>
   <Rodape/>
   </>
  )
}

export default Pagina