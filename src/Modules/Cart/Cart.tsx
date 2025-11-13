import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="cartTopSide">
            <h2 className="cartTitle">CART</h2>
          </div>
          <div className="cartBottomSide">
            <h2 className="cartBottomSideText">Your cart is empty</h2>
            <Link className="continueShoping" to={"/story"}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
