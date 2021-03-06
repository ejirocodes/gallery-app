import React from 'react';
import {IonContent, IonFab,
    IonFabButton, IonHeader,
    IonIcon, IonPage, IonTitle,
    IonToolbar,
    IonGrid, IonRow,
    IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import {usePhotoGallery} from '../hooks/usePhotoGallery';
import './About.css';

const Photos: React.FC = () => {

    const {takePhoto, photos} =  usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonGrid>
              <IonRow>
                  {photos.map((photo, i) => (
                      <IonCol size="6" key={i}>
                          <IonImg src={photo.base64 ?? photo.webviewPath} />
                      </IonCol>
                  ))}
              </IonRow>
          </IonGrid>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton onClick={() => takePhoto()}>
                  <IonIcon icon={camera} />
              </IonFabButton>
          </IonFab>
        {/*<ExploreContainer name="Tab 2 page" />*/}
      </IonContent>
    </IonPage>
  );
};

export default Photos;
