import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import type { IProduct } from "../../Models/HomeModels";
import { HomeService } from "../../Service/HomeService";
import ShopCard from "../ShopCard";
const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getData = async () => {
    try {
      const res = await HomeService.productList();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="products">
      <div className="container">
        <div className="row">
          <div className="productContent">
            <h2 className="productTitle">EXPLORE OUR PRODUCTS</h2>
            <p className="productText">
              Some of the world's finest Arabica beans in the palm of your hand.
            </p>
          </div>

          <div className="product">
            <Swiper
              slidesPerView={4}
              navigation={true}
              spaceBetween={30}
              centeredSlides={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="swpierImg">
                    <ShopCard data={item} key={item._id} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
