import {
    DSC_PRICE,
    ASC_PRICE,
    CATEGORIES_TO_FILTER
} from '../Actions/Action-types'

const initialState = {
    sortByPrice:'DSC_PRICE',
    filterByCategory : ['jewelery','men\'s clothing','electronics'],
}

const reducer = (state = initialState, action)=>{
    console.log('редюссер фильтра', action)

    switch (action.type){
      case DSC_PRICE:{
        return {
          ...state,
          sortByPrice: DSC_PRICE
        }
      }
      case ASC_PRICE:{
        return {
          ...state,
          sortByPrice: ASC_PRICE
        }
      }
      case CATEGORIES_TO_FILTER:{
        //const arr = action.payload;
        return {
          ...state,
          filterByCategory : action.payload,
        }
      }
      default :
      return state;
    }
}

export default reducer;
