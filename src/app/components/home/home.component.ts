import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transform = ""
  clicked = false
  contactClicked = false

  constructor() { 

  }
//-------------------- Auto Typing Text ------------------//
  ngOnInit(): void {
    const options = {
      strings: ['a web developer', 'globetrotter'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
 
    const typed = new Typed('.auto-input', options);
//--------------------------------------------------------//

//---------------- Projects Toggling ---------------------//
    document.querySelectorAll(".link").forEach( link =>{
      link.addEventListener("click", function(this:any){
        document.querySelectorAll(".link").forEach( li => {
          li.classList.remove('active')
          li.classList.remove('toggleListEffect')
          this.classList.add('active')
          this.classList.add('toggleListEffect')
        });
      })
    })
//-------------------------------------------------------//

//------------------------ Carousel ---------------------//

    let slides = document.querySelectorAll(".slide"),
        btns = document.querySelectorAll(".btn-slide"),
        arrowPrev = document.getElementById("arrowPrev"),
        arrowNex = document.getElementById("arrowNex"),

        ul = document.querySelectorAll(".link"),
        slideImages = document.querySelectorAll(".slide"),

        publicSliders = document.querySelectorAll(".carouselBtnCont a"),

        currentSlide = 1,
        nexInd = 0,
        currentInd = 0


    ul.forEach( btn => {
      btn.addEventListener("click", function(this:any){
        slideImages.forEach( slide => {
          slide.classList.add("filterSlides")
        })
        document.querySelectorAll(this.dataset.cat).forEach(el => {
          el.classList.remove("filterSlides")
        })
      })
    })

    publicSliders.forEach(a => {
      a.addEventListener("click", function(this:any){
        publicSliders.forEach(a => {
          a.classList.remove("active")
          this.classList.add("active")
        })
      })
    })


    btns.forEach( (btn, i) => {
      btn.addEventListener('click', () => {
        manualNav(i)
        currentSlide = i
      })
    })

        

    arrowNex?.addEventListener("click", () => {
      if(nexInd < slides.length -1){
        nexInd++
        manualNav(nexInd)
        currentInd = nexInd
      }else {
        nexInd = 0
        currentInd = nexInd
        manualNav(nexInd)
      }
    })

    arrowPrev?.addEventListener("click", () => {
      if(currentInd > 0){
        currentInd = currentInd - 1
        manualNav(currentInd)
        nexInd = currentInd
      } else {
        currentInd = slides.length - 1
        manualNav(currentInd)
        nexInd = currentInd
      }
    })

    var manualNav = function(manual:any){
      
      slides.forEach( slide => {
        slide.classList.remove('active')
      })

      btns.forEach( btn => {
        btn.classList.remove('active')
      })

      slides[manual].classList.add('active');
      btns[manual].classList.add('active')
    }

  }

  toggleState(){
    this.clicked = true
  }

  contact(){
    this.contactClicked = !this.contactClicked
  }

  closeForm(e:any){
    e.preventDefault()
    this.contactClicked = !this.contactClicked
  }
  


}






