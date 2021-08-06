import { createStore } from 'redux'
import ProductApi from '../api/productapi'
import React , { useState, useEffect}from 'react'

const reducer = (state , action) =>{
    console.log(state)
}
/// soter mới 
const storeProduct = createStore(reducer)
console.log(storeProduct.getState())