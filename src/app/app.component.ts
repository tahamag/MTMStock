import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    MatToolbarModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatIconModule, 
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isExpanded = true;
  menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: '/inventory', title: 'Inventory', icon: 'inventory_2' },
    { path: '/orders', title: 'Orders', icon: 'shopping_cart' },
    { path: '/suppliers', title: 'Suppliers', icon: 'group' }
  ];

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}