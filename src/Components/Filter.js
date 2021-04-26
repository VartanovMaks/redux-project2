import React, {useMemo} from 'react';
import {DSC_PRICE,ASC_PRICE,CATEGORIES_TO_FILTER } from '../Redux/Filter-reducer'

export const Filter = (sortDirection,onSubmit,categories) =>{
    const isDscSort = false;
    if(sortDirection === DSC_PRICE) {isDscSort = true;}
    return (
        <div>
           <form onSubmit={onSubmit} className='div-form'>
                <div style={{margin :'10px 5px'}}>
                    <p><input type='radio' name='sort-order' value = {DSC_PRICE} 
                        checked={isDscSort ? 'true' : 'false'}>
                    </input> To lower price</p>
                    <p><input type='radio' name='sort-order' value = {ASC_PRICE}
                        checked={!isDscSort ? 'true' : 'false'}>
                    </input> To bigger price </p>
                </div>
                <div style={{margin :'10px 5px'}}>     
                    <select name="categories" multiple>
                        {/* {categories.map(category => <option value={category}>{category}</option>)} */}
                        <option value='чебурах'>чебурах</option>
                        <option value='кроко'>кроко</option>
                    </select> 
                </div>      
              <button  style={{margin :'10px 5px'}} type="submit">Aply filter</button>
            </form>
        </div>
    )
}
