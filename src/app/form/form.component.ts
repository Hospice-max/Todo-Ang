import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent  {
  ajouter = new FormControl('')
  constructor(private todoService: TodoService) { }
  create(){
   this.todoService.ajouterTache(this.ajouter.value|| '')
  }
}
