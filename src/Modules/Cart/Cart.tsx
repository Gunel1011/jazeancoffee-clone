import { Link } from "react-router-dom";
import CloseBtn from "../../assets/img/svg/close.svg?react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../redux/slices/productSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.productSlice.cart);
  const price = useAppSelector((state) => state.productSlice.price);
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
                      <button
                        className="cartProductBtns increase"
                        onClick={() => dispatch(incrementQuantity(item._id))}
                      >
                        +
                      </button>
                      <p className="cartProductCount">{item.quantity}</p>
                      <button
                        className="cartProductBtns decrease"
                        onClick={() => dispatch(decrementQuantity(item._id))}
                      >
                        -
                      </button>
                    </div>
                    <p className="cartProductPrice">{price} $</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* right side  */}
            <div className="cartProductsRightSide">
              <div className="cartProductTotalPrice">
                <div className="cartProductTotalBlock">
                  <p className="cartProductTotalBlockTitle">Sub total</p>
                  <span className="cartProductTotalBlockPrice">{price} $</span>
                </div>
                <hr />
                <div className="cartProductTotalBlock">
                  <p className="cartProductTotalBlockTitle">Vat</p>
                  <span className="cartProductTotalBlockPrice">0 $</span>
                </div>
                <hr />
                <div className="cartProductTotalBlock">
                  <p className="cartProductTotalBlockEnd">Total</p>
                  <span className="cartProductTotalBlockEnd">0 $</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
