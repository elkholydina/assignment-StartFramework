import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Notfound } from "./components/notfound/notfound";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, About, Portfolio, Contact, Notfound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment-StartFramework');
}
