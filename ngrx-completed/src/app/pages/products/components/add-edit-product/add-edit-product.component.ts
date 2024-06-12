import { Product, ProductForm } from './../../models/product.model';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { PRODUCT_THUMBNAILS } from '../../consts/product-thumbnails.const';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class AddEditProductComponent implements OnInit {
  thumbnails = [...PRODUCT_THUMBNAILS];
  form = new FormGroup<ProductForm>({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    price: new FormControl(0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    thumbnail: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialog: MatDialogRef<AddEditProductComponent>
  ) {}

  ngOnInit() {
    if (this.data) {
      this.setForm();
    }
  }

  setForm() {
    this.form.patchValue({ ...this.data });
  }

  save() {
    const product: Product = {
      id: this.data ? this.data.id : Math.random() * 1000 + 1,
      ...this.form.getRawValue(),
    };
    this.dialog.close(product);
  }
}
