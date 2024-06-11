import { FormControl } from '@angular/forms';

export interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

export interface ProductCount {
  product: Product;
  count: number;
}

export interface ProductForm {
  name: FormControl<string>;
  price: FormControl<number>;
  thumbnail: FormControl<string>;
}
