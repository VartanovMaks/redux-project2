import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
        const select = filter.find(el => el.localName === 'select')
        let sortByCategories=[]
        // вдруг не было задано ни одной категории вообще
        if ( select !== undefined ){
            // выдергиваем весь список категорий
             let categories = Array.from(select)
             //Формируем массив объектов категорий с полем checked для передачи в диспатч
             for(let i=0; i<categories.length; i++){
                 sortByCategories[i].name= categories.value;
                 sortByCategories[i].checked = categories.checked;
             }
        }
        dispatch(сategoriesToFilter(sortByCategories))
        dispatch(sortByPrice.value === DSC_PRICE ? dscSortOrder() : ascSortOrder() )
        console.log('store after',store.getState());
    }
    console.log('filterByCategory',filterByCategory);

    return (
        <div>
            <Filter sortDirection={sortByPrice} onSubmit={onSubmit} />
        </div>
    )
}
