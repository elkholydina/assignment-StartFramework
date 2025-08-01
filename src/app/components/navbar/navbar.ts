import { Component, ElementRef, ViewChild} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavList
{
  navLink: string,
  text:string
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar
{
  @ViewChild("nav")
  nav !: ElementRef
  navLinks: NavList[] = [ { navLink: "/about", text: "about" }, { navLink: "/portfolio", text: "portfolio" }, { navLink: "/contact", text: "contact" } ]

  scrollFunction =  (): void =>
  {
    if ( window.scrollY > 10 )
    {
      this.nav.nativeElement.classList.replace("py-4" , "py-2")
    } else
    {
      this.nav.nativeElement.classList.replace("py-2" , "py-4")
     }
  }

ngOnInit(): void {
  window.addEventListener('scroll' , this.scrollFunction)
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll' , this.scrollFunction)
  }
}
