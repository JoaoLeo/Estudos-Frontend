import React from 'react'

const style = {
  backgroundColor: "red"
}
const p = {
  color: "purple",
  textAlign: "center"
}
export const Rodape = () => {
  return (
    <div style={{width: "100%"}} className='bg-secondary text-white text-center position-fixed bottom-0'>
    <p style={p}>
      Rodape
    </p>
    </div>
  )
}
