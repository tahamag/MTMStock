import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-add-client-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent {
  client: Client = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    status: 'active'
  };

  constructor(public dialogRef: MatDialogRef<AddClientDialogComponent>) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.dialogRef.close(this.client);
    }
  }

  isFormValid(): boolean {
    return true // this.client.name && this.client.email && this.client.phone;
  }
}

