import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  ajouter = new FormControl('', Validators.required)
  
  constructor(private todoService: TodoService) { }

  create() {
    this.todoService.ajouterTache(this.ajouter.value || '');
    this.ajouter.setValue('');
  }

}
