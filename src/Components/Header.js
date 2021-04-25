import React, {useMemo} from 'react';
import {useSelector, useDispatch, getState} from 'react-redux';
import {store} from '../Store'
import {dscSortOrder, ascSortOrder, сategoriesToFilter} from '../Action-creators/Filter-action-creator'

import {DSC_PRICE,ASC_PRICE,CATEGORIES_TO_FILTER } from '../Actions/Action-types'

export const Header = () =>{
    // const {filter} = useSelector(store=>store)
    //const {filterByCategory} = useSelector(store=>store.filterByCategory)
    const dispatch = useDispatch();
    
    const onSubmit = (e)=>{
      console.log(store.filter);
      
      e.preventDefault();
      const {elements} = e.target;
      const filter = Array.from(elements)
      //console.log(filter);
      // находим выделенные элемент radio
      const sortByPrice = filter.find ( el => el.checked === true )
      console.log(sortByPrice.checked, sortByPrice.value);
      // находим список категорий по которым будем сортировать
      const categories = Array.from(filter.find(el => el.localName === 'select'))
      const sortByCategories = categories.filter( el=>el.selected===true).map(el=>el.value);
      console.log(sortByPrice);
      dispatch(сategoriesToFilter(sortByCategories))
      dispatch(sortByPrice.value == DSC_PRICE ? dscSortOrder() : ascSortOrder() )
      console.log(store.getState());
    }
    
    return (
        <header>
            <form onSubmit={onSubmit}>
              <p><input type='radio' name='sort-order' value = {DSC_PRICE} defaultChecked>
              </input> To lower price</p>
              <p><input type='radio' name='sort-order' value = {ASC_PRICE}>
              </input> To bigger price </p>
              <select name="categories" multiple>
                  <option value="Чебурашка">Чебурашка</option>
                  <option value="Крокодил">Крокодил Гена</option>
                  <option value="Шапокляк">Шапокляк</option>
                </select> 
              <button type="submit">Sor order</button>
            </form>  
        </header>
    )
}

//export default Header;