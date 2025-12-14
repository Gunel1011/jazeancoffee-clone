import { useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import visaImg from "../assets/img/visa.png"
const CartBuy = () => {
    const cart = useAppSelector((state) => state.productSlice.cart);
    const totalPrice = useAppSelector((state) => state.productSlice.totalPrice);
    return (
        <section className="cartBuy">
            <div className="container">
                <div className="row">
                    <div className="cartBuyTop">
                        <div className="cartBuyLeftSide">
                            <h2 className="leftSideTitle">Product List</h2>
                            {cart.map((item) => (
                                <li className="cartProduct" key={item._id}>
                                    <div className="cartProductImg">
                                        <img src={item.productImage} alt="skks" />
                                    </div>
                                    <Link
                                        to={`/car-details/${item._id}`}
                                        className="cartProductName"
                                    >
                                        {item.name}
                                    </Link>
                                    <p className="cartProductPrice">{item.quantity * item.price} $</p>
                                </li>
                            ))}
                            <p className="cartBuyTotalPrice">Total Price: {totalPrice} $</p>
                        </div>
                        <div className="cartBuyRightSide">
                            <h2 className="rigtSideTitle">Payment Method</h2>
                            <div className="cartBuyImg">
                                <img src={visaImg} alt="visa_img" />
                            </div>
                            <form className="cartBuyForm">
                                <input type="text" name="name" />
                                <input type="text" name="surname" />
                                <input type="number" name="16 reqeqemli kod" />
                                <input type="text" name="addres" />
                                <input type="tel" />
                                <input type="month" />
                                <div className="cartBuyBlock">
                                    <input type="number" name="CVV/CVC/CSC" />
                                    <input type="number" />
                                </div>
                                <button>Buy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartBuy