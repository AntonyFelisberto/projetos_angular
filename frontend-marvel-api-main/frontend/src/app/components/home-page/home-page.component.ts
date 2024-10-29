import { Component, OnInit,AfterViewInit, ElementRef, ViewChild, AfterContentChecked } from '@angular/core';
import { Characters } from 'src/app/models/Characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewInit,AfterContentChecked  {

  startX: any;
  firstCardWidth: any;
  StartScrollLeft: any;
  searchText:string = "";
  isDragging = false;
  heroes!:Characters[];
  carousel: Element | null = null;
  arrowBtns: NodeListOf<Element> | null = null;

  @ViewChild('carouselRef', { static: true }) carouselRef!: ElementRef;

  constructor(private characterService:CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (characters:Characters[]) => {
        this.heroes = characters
      }
    );

    this.carousel = document.querySelector(".carousel");
    this.arrowBtns = document.querySelectorAll(".wrapper i");
    this.carousel?.addEventListener("mousedown", this.dragStart);
    this.carousel?.addEventListener("mousemove", this.dragging);
    this.carousel?.addEventListener("mouseup", this.dragStop);
  }

  ngAfterViewInit(): void {
    this.carousel = this.carouselRef.nativeElement;
    this.arrowBtns = document.querySelectorAll(".wrapper i");

    this.arrowBtns?.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.carousel) {
          this.carousel.scrollLeft += btn.id === "left" ? -this.firstCardWidth : this.firstCardWidth;
        }
      });
    });
  }

  ngAfterContentChecked(): void {
    const cardElement = this.carousel?.querySelector(".card") as HTMLElement; // Cast to HTMLElement
    this.firstCardWidth = cardElement?.offsetWidth || 0;
  }

  nextSlide(): void {
    if (this.carousel && this.arrowBtns) {
      this.firstCardWidth = this.carousel.querySelector(".card");

      if (this.firstCardWidth) {
        this.firstCardWidth = this.firstCardWidth?.offsetWidth;
      }

      this.arrowBtns.forEach(btn => {
        btn.addEventListener("click",() =>{
          if (this.carousel) {
            this.carousel.scrollLeft += btn.id === "left" ? -this.firstCardWidth : this.firstCardWidth;
          }
        })
      })
    }
  }

  dragStart = (e:any) => {
    this.isDragging = true;
    if (this.carousel) {
      this.carousel.classList.add("dragging");
      this.startX = e.pageX;
      this.StartScrollLeft = this.carousel.scrollLeft
    }
  }

  dragStop = () => {
    this.isDragging = false;
    if (this.carousel) {
      this.carousel.classList.remove("dragging");
    }
  }

  dragging = (e:any) => {
    if(!this.isDragging) return;
    if (this.carousel) {
      this.carousel.scrollLeft = this.StartScrollLeft - (e.pageX - this.startX)
    }
  }

  updateName(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

}
