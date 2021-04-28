import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {DSC_PRICE,ASC_PRICE,CATEGORIES_TO_FILTER, loadCategories } from '../Redux/Filter-reducer'

export const Filter = ({sortDirection,onSubmit}) =>{
    const dispatch = useDispatch();
    const {filterByCategory}=useSelector(store=> store.filter)
    
    useEffect(()=>{
        dispatch(loadCategories())
    },[])


    return (
        <div>
           <form onSubmit={onSubmit} className='div-form'>
                <div style={{margin :'10px 5px'}}>
                    
                    {(sortDirection == DSC_PRICE) ? (<p><input type='radio' name='sort-order' value = {DSC_PRICE} defaultChecked>
                    </input> To lower price</p>):
                    (<p><input type='radio' name='sort-order' value = {DSC_PRICE}>
                    </input> To lower price</p>)}
                    
                    {(sortDirection == ASC_PRICE) ? (<p><input type='radio' name='sort-order' value = {ASC_PRICE} defaultChecked>
                    </input> To bigger price</p>):
                    (<p><input type='radio' name='sort-order' value = {ASC_PRICE}>
                    </input> To bigger price</p>)}
                </div>
                <div style={{margin :'10px 5px'}}>     
                    {!!filterByCategory.length && <select name="categories" multiple>
                        {filterByCategory.map(category => (<option value={category.name} checked={category.checked}>{category.name}</option>)
                        )}
                    </select> }
                </div>      
              <button  style={{margin :'10px 5px'}} type="submit">Aply filter</button>
            </form>
        </div>
    )
}
