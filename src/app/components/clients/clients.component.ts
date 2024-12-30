import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { Client } from '../../interfaces/client.interface';
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    AddClientDialogComponent
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'city', 'status', 'actions'];
  dataSource: Client[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      address: '123 Main St',
      city: 'New York',
      country: 'USA',
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+0987654321',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      country: 'USA',
      status: 'inactive'
    }
  ];

  searchText: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchText = filterValue.trim().toLowerCase();
  }

  addClient() {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.dataSource.length + 1;
        this.dataSource = [...this.dataSource, result];
      }
    });
  }

  editClient(client: Client) {
    console.log('Edit client:', client);
  }

  deleteClient(client: Client) {
    console.log('Delete client:', client);
  }
}