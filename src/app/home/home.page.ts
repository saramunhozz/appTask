import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel } from '@ionic/angular/standalone';

//Interfaca para criar um "objeto" com nossa tarefa
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, CommonModule, FormsModule,IonList, IonLabel],})
export class HomePage {

  tasks: Task[] = []; //Inicia lista de tarefas vazia
  newTask: string = ''; //nova tarefa (valor do campo)

  addTask() {
    if (this.newTask.trim()) {

      const newTaskObj: Task = { // Cria objeto Task
        id: Date.now(),
        title: this.newTask.trim(),
        completed: false
      };
      this.tasks.push(newTaskObj);

      this.newTask = '';
    }


    
  }


  constructor() { }
}
