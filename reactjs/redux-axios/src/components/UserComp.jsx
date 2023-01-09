import React, {useEffect} from 'react'
import { getAllUsersAction } from '../actions'
import { useDispatch , useSelector} from 'react-redux';
function UserComp() {

  let dispatch = useDispatch();
     

  const getDataFromStore = useSelector((state) => state); 

  console.log(getDataFromStore);
    useEffect( () => {
      
         dispatch(getAllUsersAction());
         console.log('dispatched');

    } , [] )
    

  return (
    <div>
  
          {      }

    </div>
  )
}

export default UserComp