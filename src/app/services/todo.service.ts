import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
id:number = 1;

  constructor() { }
  taches: { id: number,  text: string, complete: boolean }[] = [];

  ajouterTache = (t:string): void => {
    this.taches.push({id:this.id++, text: t, complete: false });
  };
  getTodo () {
    return this.taches;
  }

 supprimerTache = (index: number): void => {
    this.taches.splice(index, 1);
  };
   modifierTache = (index:number):void => {
     const tacheAModifier = this.taches[index];
    const nouvelleDescription:string|null = prompt('Entrez la nouvelle description de la tâche :');
    if (nouvelleDescription) {
     tacheAModifier.text = nouvelleDescription;
     }
  };

}
