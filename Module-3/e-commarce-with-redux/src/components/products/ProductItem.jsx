import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cart/actions';
import { decreaseQuantity } from '../../redux/products/actions';
export default function ProductItem({ product }) {
  // console.log(Object.keys(product).join(','))
  const { id, productName, category, image, price, quantity } = product;
  const dispatch = useDispatch()

  const handleAddCart = () => {
    dispatch(addCart(product))
    dispatch(decreaseQuantity(id))
  }

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
          <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
        </div>
        <button onClick={handleAddCart} disabled={!quantity} className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  )
}