import * as actionConstant from './actionConstant';

const initialData = {
  products:[
    { pname: 'Apple', price: 20 },
    { pname: 'Banana', price: 10 },
    { pname: 'Grapes', price: 15 },
    { pname: 'Watermelon', price: 18 },
    { pname: 'Mango', price: 25 }
  ],
  cart:[],
  total:0
}

const ProductReducer = (state=initialData, action) =>{
  if(action.type === actionConstant.PURCHASE){
    return {
      ...state,
      cart:[...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.price)
    }
  }
  if(action.type === actionConstant.DELETE){
    return {
      ...state,
      cart:state.cart.filter((i,index)=> index != action.payLoad.index),
      total: state.total - action.payLoad.price
    }
  }
  return state
}

export default ProductReducer;