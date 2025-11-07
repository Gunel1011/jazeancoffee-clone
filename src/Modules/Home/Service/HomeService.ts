import * as HomeProdvider from "../Provider/HomeProvider";
export class HomeService {
  static async productList() {
    return await HomeProdvider.getProducts().then((res) => {
      return res.data.map((item) => ({
        ...item,
        productImage: `${import.meta.env.VITE_IMAGE_URL}${item.productImage}`,
      }));
    });
  }
  static async productDetails(id: string) {
    return await HomeProdvider.getProductDetails(id).then((res) => {
      return {
        ...res.data,
        productImage: `${import.meta.env.VITE_IMAGE_URL}${
          res.data.productImage
        }`,
      };
    });
  }
}
