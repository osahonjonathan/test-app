import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') namekey!:ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    console.log("Test", this.namekey)
  }

  // startQuiz(){
  //   localStorage.setItem("key1",this.namekey.nativeElement.value );
  // }

  

}
