import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todo = [
    {name:'Chips Lays 30g',urlImage:'../../assets/chips.jpg'}
    ,
    {name:'Pop Corn XXL',urlImage:'../../assets/popcorn.jpg'},
    {name:'Coca Cola 50cl',urlImage:'../../assets/cocacola.jpg'},
    {name:'Sandwich au choix',urlImage:'../../assets/sandwich.jpg'}
  ];

  done = [
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

