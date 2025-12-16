import Star from "../../../assets/img/svg/yellowStar.svg?react";
import { addToCart } from "../../../redux/slices/productSlice";
import showNotification from "../../../utils/showNotification";
import Search from "../../../assets/img/svg/search.svg?react";
import type { IProduct } from "../../Home/Models/HomeModels";
import { HomeService } from "../../Home/Service/HomeService";
import storeImg1 from "../../../assets/img/store_img_1.jpg";
import storeImg2 from "../../../assets/img/store_img_2.jpg";
import Plus from "../../../assets/img/svg/plus.svg?react";
import { useAppDispatch } from "../../../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopCard from "../../Home/View/ShopCard";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Store = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useAppDispatch();
  const getStoreData = async () => {
    try {
      const res = await HomeService.productList();
      setProducts(res);
    } catch (error: any) {
      console.log(error);
      showNotification("error", error?.response?.data);
    }
  };
  useEffect(() => {
    getStoreData();
  }, []);
  return (
    <section className="store">
      <div className="container">
        <div className="row">
          <div className="storeTitle">
            <Star className="star" />
            <h2 className="title">EXPLORE OUR PRODUCTS</h2>
            <div className="search">
              <Search className="searcImg" />
              <input type="text" placeholder="Search products" />
            </div>
          </div>
        </div>
      </div>
      {/* slider  */}
      <div className="swiperStore">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={storeImg1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={storeImg2} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* products  */}
      <div className="productBlock">
        <div className="container">
          <h2 className="productBlockTitle">All Products</h2>
          <p className="productBlockText">
            Jazean, where our land meets ambition and our heritage connects to
            our vision.
          </p>
          <div className="productAll">
            {products.map((item) => (
              <div className="product">
                <div className="swpierImg">
                  <ShopCard data={item} key={item._id} />
                </div>
                <h2 className="name">{item.name}</h2>
                <p className="text">{item.details}</p>
                <p className="price">{item.price} $</p>
                <div
                  className="buttonAdd"
                  onClick={() => {
                    dispatch(addToCart(item));
                    showNotification("success", "Məhsul uğurla əlavə edildi..");
                  }}
                >
                  <span> Quick Add</span>
                  <Plus className="plus" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
