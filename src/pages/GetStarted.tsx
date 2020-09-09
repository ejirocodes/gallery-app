import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
// import { IonMenu,  IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './GetStarted.css';

const GetStarted: React.FC = () => {
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
          <IonGrid class="img-grid">
              <IonRow  class="img-row">
                 <IonButton href="/gallery" class="cta-btn" expand="full" color="warning">Get Started</IonButton>
              </IonRow>
          </IonGrid>
        {/*<ExploreContainer name="Tab 10 page" />*/}
      </IonContent>
    </IonPage>
  );
};

export default GetStarted;
