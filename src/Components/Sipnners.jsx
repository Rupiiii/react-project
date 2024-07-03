import React from 'react'
import { ClipLoader } from 'react-spinners'

const overide={
    display:'block',
    margin:'100px auto'
}

const Sipnners = ({loading}) => {
  return (
    <ClipLoader 
        color='#4338ca'
        loading={loading}
        cssOverride={overide}
    />
  )
}

export default Sipnners