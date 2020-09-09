import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
// import { IonMenu,  IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photified</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photified</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonGrid>
              <IonRow>
                  <IonCol size="12"> <IonButton href="#">Get Started</IonButton></IonCol>
              </IonRow>
          </IonGrid>
        {/*<ExploreContainer name="Tab 10 page" />*/}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
