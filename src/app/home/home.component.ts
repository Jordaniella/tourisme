import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  appearTextBegin: boolean[] = [false, false]
  ngOnInit(): void {
    setTimeout(() => {
      this.appearTextBegin[0] = true
    }, 1000);
    setTimeout(() => {this.appearTextBegin[1] = true}, 3000)
  }
}
