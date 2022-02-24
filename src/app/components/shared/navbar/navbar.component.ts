import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navState = false
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(this:any): void {

    this.breakpointObserver
    .observe(['(min-width: 400px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
    }



    toggleState() {
      this.navState = !this.navState
      document.getElementById("top-dash")?.classList.remove("rotateTopDiv")
      document.getElementById("middle-dash")?.classList.remove("hideMiddleDiv")
      document.getElementById("bottom-dash")?.classList.remove("rotateBottomDiv")
      document.getElementById("shape")?.classList.remove("changeShapeBgColor")
    }



  showList(){
    this.navState = !this.navState
    if(document.getElementById("middle-dash")?.classList.contains("hideMiddleDiv")){
      document.getElementById("top-dash")?.classList.remove("rotateTopDiv")
      document.getElementById("middle-dash")?.classList.remove("hideMiddleDiv")
      document.getElementById("bottom-dash")?.classList.remove("rotateBottomDiv")
      document.getElementById("shape")?.classList.remove("changeShapeBgColor")
    }else {
      document.getElementById("top-dash")?.classList.add("rotateTopDiv")
      document.getElementById("middle-dash")?.classList.add("hideMiddleDiv")
      document.getElementById("bottom-dash")?.classList.add("rotateBottomDiv")
      document.getElementById("shape")?.classList.add("changeShapeBgColor")
    }
  }
}

window.addEventListener('scroll', function(){
  let nav = this.document.querySelector('nav')
  let windowPosition = window.scrollY > 350
  nav?.classList.toggle("scrolling-active", windowPosition)
})


