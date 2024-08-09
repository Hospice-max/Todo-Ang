import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  index!: number;
  ajouter = new FormControl('', Validators.required)
  
  constructor(private todoService: TodoService, private service: TodoService) { }

  create() {
    this.todoService.ajouterTache(this.ajouter.value || '');
    this.ajouter.setValue('');
  }

  
  deleteAll(): void {
    this.service.supprimerAllTache(this.index)
      }
}
