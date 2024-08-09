import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
id:number = 0;

  constructor() { }
  taches: { id: number,  text: string, complete: boolean }[] = [];

  ajouterTache = (t:string): void => {
    this.taches.push({id:this.id++, text: t, complete: false });
  };
  getTodo () {
    return this.taches;
  }

}
