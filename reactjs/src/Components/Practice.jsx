import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators, combineReducers } from 'redux'
import { getAllUsersAction } from '../../../react-redux-form-async/src/actions/empAction'
import { defaultState } from '../../../react-redux-form-async/src/reducers/defaultState'
import { employeeReducer } from '../../../react-redux-form-async/src/reducers/employeeReducer'
import { DELETE_USER } from '../../../react-redux/src/actions/actionTypes'

const Practice = () => {
  return (
    <div>Practice
    </div>
  )
}

export default Practice



