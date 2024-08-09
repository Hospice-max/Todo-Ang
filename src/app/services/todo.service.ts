import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
id:number = 1;
  text?: string;
  index: any;
  


  constructor() { }
  taches: { id: number,  text: string, complete: boolean }[] = [];

  ajouterTache = (t:string): void => {
    if(t.trim()!== '') {
    this.taches.push({id:this.id++, text: t, complete: true});
  }};
  getTodo () {
    return this.taches;
  }

 supprimerTache = (index: number): void => {
    this.taches.splice(index, 1);
  };
  
 supprimerAllTache = (index: number): void => {
      this.taches.splice(index);
  };

}
