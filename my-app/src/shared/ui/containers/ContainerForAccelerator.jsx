import React from 'react'

const ContainerForAccelerator = ({titleImg, text}) => {
  return (
    <div className='container__accelerator'>
        <img src={titleImg} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default ContainerForAccelerator