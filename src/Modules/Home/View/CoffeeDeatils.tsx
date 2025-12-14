import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IProduct } from "../Models/HomeModels";
import { HomeService } from "../Service/HomeService";
import { Swiper, SwiperSlide } from "swiper/react";
import Plus from "../../../assets/img/svg/plus.svg?react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ShopCard from "./ShopCard";
import { Navigation } from "swiper/modules";
import Loading from "../../../components/Loading";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addToCart } from "../../../redux/slices/productSlice";
import showNotification from "../../../utils/showNotification";

const CoffeeDeatils = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispacth = useAppDispatch();
  const cart = useAppSelector((state) => state.productSlice.cart);
  const cartItem = cart.find((item) => item._id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const [count, setCount] = useState(1);
  const getDetails = async () => {
    setLoading(true);
    try {
      if (id) {
        const res = await HomeService.productDetails(id);
        setProduct(res);
      }
      const res = await HomeService.productList();
      setProducts(res);
    } catch (error: any) {
      console.log(`error submit`, error);
      showNotification("error", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="coffeDetails">
      <div className="container">
        <div className="row">
          <div className="topSide">
            <div className="coffeeContent">
              <div className="detail">
                <h2 className="detailTitle">{product?.name}</h2>
                <p className="detailText">{product?.details}</p>
              </div>
              <div className="addBasket">
                <h2 className="basketTitle">Size</h2>
                <span className="size">250g</span>
                <p className="price">{product?.price} $</p>
                <div className="coffeeDetailButtons">
                  <div className="coffeeDetailButtonsCountBlcok">
                    <button className="coffeeDetailBtn" onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))}
                      disabled={quantity === 0}>-</button>
                    <p className="count">{count}</p>
                    <button className="coffeeDetailBtn" onClick={() => setCount(prev => prev + 1)}>+</button>
                  </div>
                  <button
                    className="addToCart"
                    onClick={() => {
                      const productWithQuantity = { ...product, quantity: count };
                      dispacth(addToCart(productWithQuantity));
                      showNotification("success", `Səbətə ${count} ədəd məhsul əlavə olundu :)`);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
                <button className="buy">Buy now</button>
              </div>
            </div>
            <div className="coffeeImg">
              <img src={product?.productImage} alt={product?.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomSide">
        <div className="container">
          <h2 className="titleBottom">YOU MAY ALSO LIKE</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products
              .filter((item) => item.for_slide)
              .map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="swpierImg">
                    <ShopCard data={item} key={item._id} />
                  </div>
                  <h2 className="name">{item.name}</h2>
                  <p className="text">{item.details}</p>
                  <p className="price">{item.price} $</p>
                  <div className="buttonAdd">
                    <span> Quick Add</span>
                    <Plus className="plus" />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CoffeeDeatils;
