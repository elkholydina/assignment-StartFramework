import { Component } from '@angular/core';
import { Starline } from "../starline/starline";

@Component( {
  selector: 'app-portfolio',
  imports: [ Starline ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
} )
export class Portfolio
{
  imgs: string[] = [ "./imgs/portfolio1.png", "./imgs/portfolio2.png", "./imgs/portfolio3.png", "./imgs/portfolio1.png", "./imgs/portfolio2.png", "./imgs/portfolio3.png" ]
  isImageShown: boolean = false
  imgSrc!: string
  currentImgIndex!: number

  closeImg (): void
  {
    this.isImageShown = false
    console.log( this.isImageShown )
  }

  showImg ( src: string, srcIndex: number ): void
  {
    this.isImageShown = true
    this.imgSrc = src
    this.currentImgIndex = srcIndex
  }

  nextImg (): void
  {
    this.currentImgIndex++
    let nextImgSrc = this.currentImgIndex % this.imgs.length
    this.imgSrc = this.imgs[ nextImgSrc ]
  }

  prevImg (): void
  {
    this.currentImgIndex = ( this.currentImgIndex - 1 + this.imgs.length ) % this.imgs.length;
    this.imgSrc = this.imgs[ this.currentImgIndex ];
  }

  keyboardOpenCloseImage = ( e: KeyboardEvent ) =>
  {
    if ( e.key === 'Escape' )
    {
      this.closeImg()
    } else if ( e.key === 'ArrowRight' )
    {
      this.nextImg()
    } else if ( e.key === 'ArrowLeft' )
    {
      this.prevImg()
    }

  }

  ngOnInit(): void {
    window.addEventListener("keydown" ,this.keyboardOpenCloseImage )

  }
  ngOnDestroy(): void {
    window.removeEventListener("keydown" , this.keyboardOpenCloseImage)

  }
}
