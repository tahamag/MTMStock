import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Total Products', value: '1,234', icon: 'inventory_2', color: '#4CAF50' },
    { title: 'Pending Orders', value: '56', icon: 'shopping_cart', color: '#FFC107' },
    { title: 'Total Revenue', value: '$45,678', icon: 'attach_money', color: '#2196F3' },
    { title: 'Active Suppliers', value: '89', icon: 'people', color: '#9C27B0' }
  ];
}