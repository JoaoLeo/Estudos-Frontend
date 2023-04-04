import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Pagina from '../components/Pagina'

const array = () => {
    const array = ["a","b","c","d","e"]
  return (
    <>
    <Pagina titulo="Array"> 
    <ol>
     
    { array.map(item =>(
        <li>
       {item}
       </li>
    )) }
   
     </ol>
    </Pagina>
    </>
  )
}

export default array