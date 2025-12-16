import { Link } from "react-router-dom";
import CloseBtn from "../../assets/img/svg/close.svg?react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";


import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../redux/slices/productSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.productSlice.cart);
  const price = useAppSelector((state) => state.productSlice.price);
  const totalPrice = useAppSelector((state) => state.productSlice.totalPrice);
  const dispatch = useAppDispatch();
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="cartTopSide">
            <h2 className="cartTitle">CART</h2>
          </div>
          {cart.length === 0 && (
            <div className="cartBottomSide">
              <h2 className="cartBottomSideText">Your cart is empty</h2>
              <Link className="continueShoping" to={"/story"}>
                Continue Shopping
              </Link>
            </div>
          )}

          <div className="cartProducts">
            {/* left Side  */}
            <div className="cartProductsLeftSide">
              <h2 className="cartProductsLeftSideTitle">Products</h2>
              <ul className="cartList">
                {cart.map((item) => (
                  <li className="cartProduct" key={item._id}>
                    <CloseBtn
                      className="closeBtn"
                      onClick={() => dispatch(removeCart(item._id))}
                    />
                    <div className="cartProductImg">
                      <img src={item.productImage} alt="skks" />
                    </div>
                    <Link
                      to={`/car-details/${item._id}`}
                      className="cartProductName"
                    >
                      {item.name}
                    </Link>
                    <div className="cartProductCountBtn">
                      <FaPlusCircle className="cartbutton" onClick={() => dispatch(incrementQuantity(item._id))} />
                      <p className="cartProductCount">{item.quantity}</p>
                      <FaCircleMinus className="cartbutton" onClick={() => dispatch(decrementQuantity(item._id))} />
                    </div>
                    <p className="cartProductPrice">{item.quantity * item.price} $</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* right side  */}
            {
              cart.length !== 0 && (

                <div className="cartProductsRightSide">
                  <div className="cartProductTotalPrice">
                    <div className="cartProductTotalBlock">
                      <p className="cartProductTotalBlockTitle">Sub total</p>
                      <span className="cartProductTotalBlockPrice">{price} $</span>
                    </div>
                    <hr />
                    <div className="cartProductTotalBlock">
                      <p className="cartProductTotalBlockTitle">Vat</p>
                      <span className="cartProductTotalBlockPrice">5%</span>
                    </div>
                    <hr />
                    <div className="cartProductTotalBlock">
                      <p className="cartProductTotalBlockEnd">Total</p>
                      <span className="cartProductTotalBlockEnd">{totalPrice} $</span>
                    </div>
                    <div className="cartProductBuyBlock">
                      <Link to={"/cartBuy"} className="buyCart">Buy Cart</Link>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
