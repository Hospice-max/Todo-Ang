import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  modifierTache(_index: number): any {
    throw new Error('Method not implemented.');
  }
id:number = 1;
  text?: string;
  index: any;
  


  constructor() { }
  taches: { id: number,  text: string, complete: boolean, edit:boolean }[] = [];

  ajouterTache = (t:string): void => {
    if(t.trim()!== '') {
    this.taches.push({id:this.id++, text: t, complete: true, edit:false});
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

modifier(tache:{ id: number,  text: string, complete: boolean, edit:boolean}){
  tache.edit = !tache.edit
}
treat(tache:{ id: number,  text: string, complete: boolean, edit:boolean}){
  tache.complete = !tache.complete
}

}

