import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar'; // 👈 importa el componente Navbar

@Component({
  selector: 'app-header',
  standalone: true, // 👈 importante
  imports: [Navbar], // 👈 ahora Header puede usar <app-navbar>
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {}
