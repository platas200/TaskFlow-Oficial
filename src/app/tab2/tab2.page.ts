import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonListHeader, IonItem, IonLabel, 
  IonBadge, IonNote, IonFab, IonFabButton, 
  IonIcon, IonItemSliding, IonItemOption, IonItemOptions 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonListHeader, IonItem, IonLabel, 
    IonBadge, IonNote, IonFab, IonFabButton, 
    IonIcon, IonItemSliding, IonItemOption, IonItemOptions]
})
export class Tab2Page {

  constructor() {}

}
