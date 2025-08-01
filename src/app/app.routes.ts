
import { Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';


export const routes: Routes = [
  { path: '', loadComponent:()=>import("./components/home/home").then((c)=>c.Home) },
  { path: "about", loadComponent:()=>import("./components/about/about").then((c)=>c.About) },
  {path: "portfolio", loadComponent: () =>import("./components/portfolio/portfolio").then((c)=>c.Portfolio)},
  { path: 'contact', loadComponent: () => import( "./components/contact/contact" ).then( ( c ) => c.Contact ) },
  {path: "**" , component:Notfound}
];
