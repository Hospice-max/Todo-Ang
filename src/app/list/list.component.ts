import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  table?:{ id: number,  text: string, complete: boolean }[] = [];
  constructor(private service: TodoService) { }
  ngOnInit(): void {
    this.table = this.service.getTodo();
  }
}
