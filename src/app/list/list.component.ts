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

<<<<<<< HEAD
  table?: { id: number, text: string, complete: boolean }[] = [];
=======
  table?:{ id: number,  text: string, complete: boolean, edit:boolean}[] = [];
>>>>>>> b77d917855cd0c20d1225f0607c92dc08baba41b
  todoService: any;
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.table = this.service.getTodo();
  }

  delete(): void {
    this.service.supprimerTache(this.index)
  }

  treat(): void {
    alert('Confirmer comme traité')
  }
  

  modifier(todo:{ id: number,  text: string, complete: boolean, edit:boolean}):void {

    this.service.modifier(todo)
  }

}




