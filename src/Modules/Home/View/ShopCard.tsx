import { Link } from "react-router-dom";
import type { IProduct } from "../Models/HomeModels";

interface IShopCard {
  data: IProduct;
}
const ShopCard: React.FC<IShopCard> = (props) => {
  const { _id, name, productImage } = props.data;
  return (
    <Link target="_blank" to={`/car-details/${_id}`}>
      <img src={productImage} alt={name} />
    </Link>
  );
};

export default ShopCard;
