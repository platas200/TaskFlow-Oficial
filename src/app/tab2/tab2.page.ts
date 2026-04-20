import { Component, inject } from '@angular/core'; // Añadimos inject
import { FormsModule } from '@angular/forms'; // ¡IMPORTANTE para los inputs!
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonInput, 
  IonTextarea, IonSelect, IonSelectOption, 
  IonButton, IonDatetime, IonDatetimeButton, IonModal 
} from '@ionic/angular/standalone';
// Importamos las herramientas de Firebase
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    FormsModule, // Agregamos esto para que funcione el [(ngModel)]
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonItem, IonLabel, IonInput, 
    IonTextarea, IonSelect, IonSelectOption, 
    IonButton, IonDatetime, IonDatetimeButton, IonModal
  ],
})
export class Tab2Page {
  // Variables para guardar lo que escribas en el formulario
  tituloTarea: string = '';
  descripcionTarea: string = '';
  prioridadTarea: string = 'medium';

  // Inyectamos Firestore
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  // Esta es la función que debe llamar el botón
  async addTarea() {
    console.log('Intentando guardar:', this.tituloTarea);
    
    if (this.tituloTarea.trim() === '') {
      alert('Por favor, ponle un título a la tarea');
      return;
    }

    try {
      const dbRef = collection(this.firestore, 'tareas');
      await addDoc(dbRef, {
        titulo: this.tituloTarea,
        descripcion: this.descripcionTarea,
        prioridad: this.prioridadTarea,
        fecha: new Date().toISOString()
      });
      
      console.log('¡Tarea guardada con éxito en Firebase!');
      
      // Limpiar el formulario
      this.tituloTarea = '';
      this.descripcionTarea = '';
      
    } catch (error) {
      console.error('Error al guardar en Firebase:', error);
    }
  }
}
