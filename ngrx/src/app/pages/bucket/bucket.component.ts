import { Bucket } from './models/bucket.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ProductCount } from '../products/models/product.model';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
  imports: [MatIconModule, AsyncPipe],
  standalone: true
})
export class BucketComponent {
  public bucket$!: Observable<Bucket>;

  public removeProduct(product: ProductCount): void {
    // remove product
  }
}
