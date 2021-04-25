import { createStore } from 'redux'
import { combineReducers } from 'redux'
import goodsReducer from '../Reducers/Goods-reduser'
import filterReducer from '../Reducers/Filter-reducer'

export const rootReducer = combineReducers({
    goods: goodsReducer,
    filter:filterReducer
  })
  export const store = createStore(rootReducer)  
  
 

