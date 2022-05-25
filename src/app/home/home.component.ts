import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public outerImageLeft: string  = "200px";
  public outerImageTop: string  = "-290px";
  public innerImageLeft: string  = "180px";
  public innerImageTop: string  = "-290px";


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(event: any) {
    this.outerImageLeft = 200 + (event.screenX / 100) + "px"
    this.outerImageTop = -300 + (event.screenY / 100) + "px"
    this.innerImageLeft = 200 - (event.screenX / 100) + "px"
    this.innerImageTop = -300 - (event.screenY / 100) + "px"
  }

}
