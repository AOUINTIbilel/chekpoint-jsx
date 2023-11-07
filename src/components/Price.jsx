import React from 'react'
import productJS from '../product'

export const Price = () => {
    console.log("JS : " , productJS.price)
  return (
    <div>
        {productJS.price}
    </div>
  )
}
export default Price
