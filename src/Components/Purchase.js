import React from 'react'

function Purchase() {
  const products = [
    { pname: 'Apple', price: 20 },
    { pname: 'Banana', price: 10 },
    { pname: 'Grapes', price: 15 },
    { pname: 'Watermelon', price: 18 }
  ]
  return (
    <div className='customDiv'>
      <h3>Purchase Components</h3>
      <hr />
      <select>
        {products.map((prod, index) => {
          return (
            <option value={prod.price} key={index}>
              {prod.pname} - ${prod.price}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Purchase