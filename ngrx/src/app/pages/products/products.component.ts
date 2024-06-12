import { Bucket } from './../bucket/models/bucket.model';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Product } from './models/product.model';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [MatIconModule, AsyncPipe],
  providers: [ProductsService],
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products$!: Observable<(Product | undefined)[]>;
  bucket$!: Observable<Bucket>;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  editProduct(product: Product) {
    this.dialog
      .open(AddEditProductComponent, {
        data: product,
      })
      .afterClosed()
      .subscribe((result: Product) => {
        if (result) {
          // edit product
        }
      });
  }

  deleteProduct(id: number) {
    // delete product
  }

  changeProductQuantity(product: Product, counter: number) {
    // change product quantity
  }

  addProduct() {
    this.dialog
      .open(AddEditProductComponent)
      .afterClosed()
      .subscribe((result: Product) => {
        if (result) {
          // add product
        }
      });
  }

  getAllProducts() {
    // get all products
    this.products$ = this.productsService.getAllProducts();
  }
}
