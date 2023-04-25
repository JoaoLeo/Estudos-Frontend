import React from 'react'

const p = {
  color: "purple",
  textAlign: "center"
}
export const Rodape = () => {
  return (
    <div style={{width: "100%"}} className='bg-secondary text-white text-center position-fixed bottom-0'>
    <p style={p}>
      <a href="https://github.com/JoaoLeo/" target={'_blank'}> João Leonardo </a>
    </p>
    </div>
  )
}
