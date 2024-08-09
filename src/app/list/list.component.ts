import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  index!: number;

  table?:{ id: number,  text: string, complete: boolean, edit:boolean}[] = [];
  todoService: any;
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.table = this.service.getTodo();
  }

  delete(): void {
    this.service.supprimerTache(this.index)
  }

  treat(todo:{ id: number,  text: string, complete: boolean, edit:boolean}): void {
    this.service.treat(todo)
  }
  
  modifier(todo:{ id: number,  text: string, complete: boolean, edit:boolean}):void {
    this.service.modifier(todo)
  }

}




