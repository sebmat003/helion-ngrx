import { ProductCount } from "../../products/models/product.model";

export interface Bucket {
  products: ProductCount[];
  overallPrice: number;
}
