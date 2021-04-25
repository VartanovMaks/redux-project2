import {
    DSC_PRICE,
    ASC_PRICE,
    CATEGORIES_TO_FILTER
} from '../Actions/Action-types'

const dscSortOrder = ()=>({type:DSC_PRICE});
const ascSortOrder = ()=>({type:ASC_PRICE});
const сategoriesToFilter = (categoriesToFilter)=>(
    {type:CATEGORIES_TO_FILTER, payload:categoriesToFilter}
);

export {
    dscSortOrder,
    ascSortOrder,
    сategoriesToFilter
}