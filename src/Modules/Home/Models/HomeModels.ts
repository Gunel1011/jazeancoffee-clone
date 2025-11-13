export interface IProduct {
  _id: string;
  name: string;
  details: string;
  for_slide: boolean;
  price: number;
  productImage: string;
  __v: number;
  quantity?: number;
}
