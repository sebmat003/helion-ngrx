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
  public products$!: Observable<(Product | undefined)[]>;
  public bucket$!: Observable<Bucket>;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public editProduct(product: Product): void {
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

  public deleteProduct(id: number): void {
    // delete product
  }

  public changeProductQuantity(product: Product, counter: number): void {
    // change product quantity
  }

  public addProduct(): void {
    this.dialog
      .open(AddEditProductComponent)
      .afterClosed()
      .subscribe((result: Product) => {
        if (result) {
          // add product
        }
      });
  }

  public getAllProducts(): void {
    // get all products
    this.products$ = this.productsService.getAllProducts();
  }
}
