import { Component } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}   // 👈 ESTE export debe existir
