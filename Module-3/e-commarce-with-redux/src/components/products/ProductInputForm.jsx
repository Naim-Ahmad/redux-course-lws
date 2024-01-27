import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/products/actions';

export default function ProductInputForm() {

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const productName = e.target.productName.value;
    const category = e.target.category.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const productInfo = {
      productName,
      category,
      image,
      price,
      quantity
    }
    console.log(productInfo)
    
    dispatch(addProduct(productInfo))
  }

  return (
    <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input className="addProductInput" name="productName" id="lws-inputName" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input className="addProductInput" name="category" id="lws-inputCategory" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input className="addProductInput" id="lws-inputImage" name="image" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input className="addProductInput" type="number" id="lws-inputPrice" name="price" required />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input className="addProductInput" type="number" id="lws-inputQuantity" name="quantity" required />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
  )
}