import React, {useMemo} from 'react';
import {useSelector, useDispatch, getState} from 'react-redux';
import {store} from '../Redux/Store'
import {dscSortOrder, ascSortOrder, сategoriesToFilter} from '../Redux/Filter-reducer'
import {Filter} from './Filter'
import {DSC_PRICE,ASC_PRICE,CATEGORIES_TO_FILTER } from '../Redux/Filter-reducer'



export const FilterDetails = () =>{

    const {filterByCategory, sortByPrice} = useSelector(store =>store.filter);
    console.log(filterByCategory, sortByPrice)
    const dispatch = useDispatch();
    
    const onSubmit = (e)=>{
    
        e.preventDefault();
        const {elements} = e.target;
        const filter = Array.from(elements)
        // находим выделенные элемент radio
        const sortByPrice = filter.find ( el => el.checked === true )
        // находим список категорий по которым будем сортировать
        const categories = Array.from(filter.find(el => el.localName === 'select'))
        const sortByCategories = categories.filter( el=>el.selected===true).map(el=>el.value);
        dispatch(сategoriesToFilter(sortByCategories))
        dispatch(sortByPrice.value == DSC_PRICE ? dscSortOrder() : ascSortOrder() )
        console.log('store after',store.getState());
      }
    
    return (
        <div>
            <Filter sortDirection={sortByPrice} onSubmit={onSubmit} categories={filterByCategory}/>
        </div>
    )
}
