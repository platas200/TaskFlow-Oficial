import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonListHeader, IonItem, IonLabel, 
  IonBadge, IonNote, IonFab, IonFabButton, 
  IonIcon, IonItemSliding, IonItemOption, IonItemOptions 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonListHeader, IonItem, IonLabel, 
    IonBadge, IonNote, IonFab, IonFabButton, 
    IonIcon, IonItemSliding, IonItemOption, IonItemOptions
  ],
})
export class Tab1Page {
  constructor() {
    // Esto registra el icono de "+" para que aparezca en el botón
    addIcons({ add });
  }
}