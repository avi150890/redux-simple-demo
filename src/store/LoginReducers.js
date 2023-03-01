import * as actionConstant from './actionConstant';

const initialData = {
  users:['admin', 'manager','end-user'],
  loginDetail: 'None'
}

const LoginReducer = (state=initialData, action) =>{
  if(action.type === actionConstant.USER){
    return {
      ...state,
      loginDetail: action.payLoad
    }
  }
  return state
}

export default LoginReducer;