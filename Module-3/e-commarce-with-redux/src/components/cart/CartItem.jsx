import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeCart } from "../../redux/cart/actions";

export default function CartItem({ cart }) {
  // const {id,productName,category,image,price,quantity} = cart;

  const dispatch = useDispatch()

  const totalPrice = cart?.price * cart?.quantity;

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={cart?.image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{cart?.productName}</h4>
          <p className="lws-cartCategory">{cart?.category}</p>
          <p>BDT <span className="lws-cartPrice">{cart?.price}</span></p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button onClick={()=> dispatch(increaseQuantity(cart?.id))} className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cart?.quantity}</span>
          <button onClick={()=> dispatch(decreaseQuantity(cart?.id))} className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{totalPrice}</span></p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={()=> dispatch(removeCart(cart?.id))} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}