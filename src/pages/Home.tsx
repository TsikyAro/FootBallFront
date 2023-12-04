import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonProgressBar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import ListeClub from '../components/ListeScore';
import './Home.css';

const MaPage = () => {
  const [selectedSegment, setSelectedSegment] = useState('2');
  const [externeClicked, setExterneClicked] = useState(false);

  const handleSegmentChange = (event) => {
    const value = event.detail.value;
    setSelectedSegment(value);

    // Si le segment "Exterieur" est sélectionné, activez la condition
    if (value === '0' || value === '1' || value ==='2' ) {
      setExterneClicked(true);
      setTimeout(() => {
        setExterneClicked(false);
      }, 2000);
    } else {
      setExterneClicked(false);
    }
  };

  return (
  <IonPage>
    <IonContent fullscreen>
      <IonHeader>
        <IonToolbar>
        {externeClicked && <IonProgressBar type="indeterminate"></IonProgressBar>}
          <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
            <IonSegmentButton value="2">
              <IonLabel>General</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="1">
              <IonLabel>Domicile</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="0">
              <IonLabel>Exterieur</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
       <div className="content-container">
       <ListeClub type={selectedSegment}/>
       </div>
    </IonContent>
   </IonPage>
    
  );
};

export default MaPage;

