import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IProduct } from "../Models/HomeModels";
import { HomeService } from "../Service/HomeService";
const CoffeeDeatils = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState<IProduct>();

  const getDetails = async () => {
    try {
      if (id) {
        const res = await HomeService.productDetails(id);
        setProduct(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <section className="coffeDetails">
      <div className="container">
        <div className="row">
          <div className="coffeeContent">
            <h2 className="detailTitle">{product?.name}</h2>
            <p className="detailText">{product?.details}</p>
            <p className="pricde">{product?.price}</p>
          </div>
          <div className="coffeeImg">
            <img src={product?.productImage} alt={product?.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeDeatils;
