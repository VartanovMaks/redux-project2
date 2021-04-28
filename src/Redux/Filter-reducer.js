const DSC_PRICE = 'DSC_PRICE';
const ASC_PRICE = 'ASC_PRICE';
const CATEGORIES_TO_FILTER = 'CATEGORIES_TO_FILTER';

const initialState = {
    sortByPrice:'ASC_PRICE',
    filterByCategory : [
      // 'jewelery','men\'s clothing','electronics'
    ],
}

const reducer = (state = initialState, action)=>{
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

const dscSortOrder = ()=>({type:DSC_PRICE});
const ascSortOrder = ()=>({type:ASC_PRICE});
const сategoriesToFilter = (categoriesToFilter)=>(
    {type:CATEGORIES_TO_FILTER, payload:categoriesToFilter}
);
//onst dispatch = useDispatch();
const loadCategories= async()=>{
 
      const resp = await fetch('https://fakestoreapi.com/products/categories');
      const son = await resp.json();
      
      let newSon=[];
      for(let i=0; i<son.length; i++){
        newSon.push({name:son[i],checked:false})
      }
      console.log('fetch',newSon);
      return {type:CATEGORIES_TO_FILTER, payload:newSon}
}

export {
    dscSortOrder,
    ascSortOrder,
    сategoriesToFilter,
    loadCategories,
    DSC_PRICE,
    ASC_PRICE,
    CATEGORIES_TO_FILTER,
}

export default reducer;
