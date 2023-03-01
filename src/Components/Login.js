import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const users = useSelector(state => state.lr.users);
  const dispatch = useDispatch();
  const loginHandler=(e)=>{
    let loginDet = e.target.options[e.target.selectedIndex].text;
    dispatch({type:"USER", payLoad:loginDet})
  }
  return (
    <div className='customDiv'>
      <h3>Login Components</h3>
      <hr />
      <select onChange={(e)=>loginHandler(e)}>
        {
          users.map((user, index)=>{
            return(
              <option key={index}>
                {user}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Login;