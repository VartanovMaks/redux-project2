import {Cart} from './Cart'
import {Wishlist} from './Wishlist'
import {FilterDetails} from './FilterDetails'

export const Header = ()=>{

  return(
      <header>
        <FilterDetails />
        <div>
            <Wishlist />
            <Cart />
        </div>
          
      </header>
  )
}