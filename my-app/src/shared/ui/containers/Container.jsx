import React from 'react'

const Container = ({imgTitle, title, text}) => {
  return (
    <div className='container'>
        <img src={imgTitle} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Container