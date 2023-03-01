import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Purchase() {
  const products = useSelector(state => state.pr.products);
  const loginDetails = useSelector(state => state.lr.loginDetail);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let obj = {pName,price};
    dispatch({type:'PURCHASE', payLoad: obj});
  }
  return (
    <div className='customDiv'>
      <h3>Purchase Components- User:- {loginDetails}</h3>
      <hr />
      <select onChange={(e)=>purchaseHandler(e)}>
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