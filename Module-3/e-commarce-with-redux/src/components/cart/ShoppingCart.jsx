import { useSelector } from 'react-redux'
import BillDetails from './BillDetails.jsx'
import CartItem from './CartItem.jsx'

export default function ShoppingCart() {

  const carts = useSelector(state=> state.carts)

  // console.log(carts.length)

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {
            carts.length > 0
            ? carts?.map(cart => <CartItem key={cart.id} cart={cart}/>) 
            : <div className="text-center py-6 text-3xl font-bold mx-auto">No Item added Here</div>
          }
        
          {/* <!-- Cart Items Ends --> */}

        </div>

        {/* <!-- Bill Details --> */}
        <div>
          <BillDetails/>
        </div>
      </div>
    </div>
  )
}