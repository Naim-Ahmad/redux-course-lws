import { useSelector } from "react-redux";
import ProductInputForm from "./ProductInputForm";
import ProductItem from "./ProductItem";

export default function Products() {
  const products = useSelector(state => state.products)

  // console.log(products)

  return (
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">

        {
          products.length 
          ? products.map(product=> <ProductItem key={product.id} product={product} />) 
          : <div className="text-center py-6 text-3xl font-bold mx-auto">No Product Here</div>
        }

      </div>

      <div>
        {/* product input form */}
        <ProductInputForm />
      </div>
    </div>
  )
}