import { useAppDispatch, useAppSelector } from "../redux/hooks";
import visaImg from "../assets/img/visa.png";
import CostumButton from "./CostumButton";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import {
  ADDRES,
  CART_NUMBER,
  CVC,
  MIN_TWO_LATTER,
  PHONE_REGEX,
} from "../utils/helper";
import { useForm } from "react-hook-form";
import type { ICartBuyForm } from "../Modules/Cart/Models/CartModelForm";
import { yupResolver } from "@hookform/resolvers/yup";
import showNotification from "../utils/showNotification";
import SwitAlert from "../utils/SwitAlert";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { resetCart } from "../redux/slices/productSlice";
import { useState } from "react";
import { IMask, IMaskInput } from "react-imask";

const CartBuy = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.productSlice.cart);
  const totalPrice = useAppSelector((state) => state.productSlice.totalPrice);
  const [phone, setPhone] = useState("");
  const currentDate = new Date();
  const currentYearShort = parseInt(
    currentDate.getFullYear().toString().slice(-2)
  );
  const cartBuyChema = object({
    name: string()
      .trim()
      .required("Name is a required field")
      .matches(MIN_TWO_LATTER, "Name must contain at least 2 letters"),
    surname: string()
      .required("Surname is a required field")
      .matches(MIN_TWO_LATTER, "Surname must contain at least 2 letters"),
    cartNumber: string()
      .required("Cart number is a required field")
      .matches(CART_NUMBER, "Must consist of exactly 16 digits."),
    addres: string()
      .trim()
      .required("Addres is a required field")
      .matches(
        ADDRES,
        "Address must be 5-100 characters and can include letters, numbers, spaces, and ,.'- characters."
      ),
    phone: string()
      .required("Phone is a required field")
      .matches(PHONE_REGEX, "Please enter a valid phone number"),
    date: string().required("Dat is a required field"),
    cvc: string()
      .required("CVC is a required field")
      .matches(CVC, "CVC must be 3 digits."),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ICartBuyForm>({
    resolver: yupResolver(cartBuyChema),
  });

  const onSubmit = async () => {
    try {
      SwitAlert();
      navigation("/story");
      reset();
      dispatch(resetCart());
    } catch (error: any) {
      showNotification("error", error?.response?.data);
    }
  };
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
                  <p className="cartProductPrice">
                    {item.quantity * item.price} $
                  </p>
                </li>
              ))}
              <p className="cartBuyTotalPrice">Total Price: {totalPrice} $</p>
            </div>
            <hr />
            <div className="cartBuyRightSide">
              <h2 className="rigtSideTitle">Payment Method</h2>
              <div className="cartBuyImg">
                <img src={visaImg} alt="visa_img" />
              </div>
              <form className="cartBuyForm" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("name")} />
                {errors.name?.message && (
                  <span className="cartBuyMessage">{errors.name.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Surname"
                  {...register("surname")}
                />
                {errors.surname?.message && (
                  <span className="cartBuyMessage">
                    {errors.surname.message}
                  </span>
                )}
                <input
                  type="number"
                  placeholder="Card Number"
                  {...register("cartNumber")}
                />
                {errors.cartNumber?.message && (
                  <span className="cartBuyMessage">
                    {errors.cartNumber.message}
                  </span>
                )}
                <input
                  type="text"
                  placeholder="Addres"
                  {...register("addres")}
                />
                {errors.addres?.message && (
                  <span className="cartBuyMessage">
                    {errors.addres.message}
                  </span>
                )}
                <PhoneInput
                  className="phoneInput"
                  defaultCountry="az"
                  value={phone}
                  placeholder="Phone"
                  onChange={(value) => {
                    setPhone(value);
                    setValue("phone", value);
                    trigger("phone");
                  }}
                />
                {errors.phone?.message && (
                  <span className="cartBuyMessage">{errors.phone.message}</span>
                )}
                <div className="cvcDateBlock">
                  <div className="cvcDateBlockInput">
                    <IMaskInput
                      mask="MM/YY"
                      blocks={{
                        MM: {
                          mask: IMask.MaskedRange,
                          from: 1,
                          to: 12,
                          maxLength: 2,
                        },
                        YY: {
                          mask: IMask.MaskedRange,
                          from: currentYearShort,
                          to: 99,
                          maxLength: 2,
                        },
                      }}
                      unmask={false}
                      placeholder="MM/YY"
                      className="cardInput"
                      onAccept={(value) => {
                        setValue("date", value);
                        trigger("date");
                      }}
                    />
                    {errors.date?.message && (
                      <span className="cartBuyMessage">
                        {errors.date.message}
                      </span>
                    )}
                  </div>
                  <div className="cvcDateBlockInput">
                    <div className="cartBuyBlock">
                      <input
                        type="text"
                        placeholder="CVV / CVC / CSC"
                        {...register("cvc")}
                        maxLength={3}
                      />
                    </div>
                    {errors.cvc?.message && (
                      <span className="cartBuyMessage">
                        {errors.cvc.message}
                      </span>
                    )}
                  </div>
                </div>
                <CostumButton text={["Buy"]} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBuy;
