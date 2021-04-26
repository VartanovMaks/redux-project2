import { createStore } from 'redux'
import { combineReducers } from 'redux'
import goodsReducer from './Goods-reducer'
import filterReducer from '../Redux/Filter-reducer'

export const rootReducer = combineReducers({
    goods: goodsReducer,
    filter:filterReducer
  })
  export const store = createStore(rootReducer)  
  
 

