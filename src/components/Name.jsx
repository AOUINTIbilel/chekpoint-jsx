import React from 'react'
import productJS from '../product'

const Name = () => {
    console.log("JS : " , productJS)
  return (
    <div>
        {productJS.name}
    </div>
  )
}

export default Name