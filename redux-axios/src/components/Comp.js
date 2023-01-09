import React from 'react'
import { useEffect } from 'react'
import { getAllUsersAction } from '../actions'
import {useDispatch} from 'react-redux'

export const Comp = () => {
    let dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getAllUsersAction());
    },[])
  return (
    <div>Comp</div>
  )
}
