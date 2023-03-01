import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../store/actionConstant';

function Cart() {
  const cart = useSelector(state => state.pr.cart);
  const loginDetails = useSelector(state => state.lr.loginDetail);
  const dispatch = useDispatch(); 
  const deleteHandler=(index, price) => {
    dispatch({type:DELETE, payLoad: {index,price}});
  }
  return (
    <div className='customDiv'>
      <h3>Cart Components- User:- {loginDetails}</h3>
      <hr />
      <ul>
        {
          cart.map((prod, index) => {
            return (
              <li onClick={()=> deleteHandler(index, prod.price)} key={index}>{prod.pName}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Cart