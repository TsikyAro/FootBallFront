import React, { useState } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Statistique = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
//   const type = params.get('type');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplacez l'URL par l'URL réelle de votre API Java
        const response = await fetch(`http://localhost:8082/domicile?i=0`);
        const data = await response.json();
        const testData = data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };
    fetchData();
  }, []);
}

function ListeClub( {type}:any ) {
    const [equipes, setEquipes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            var response;
            if(type=="2"){
              response = await fetch(`https://foot-production.up.railway.app/generale`);
            }else{

              response = await fetch(`https://foot-production.up.railway.app/domicile?i=${type}`);
            }
            const data = await response.json();
            setEquipes(data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        };
        fetchData();
      }, [type]);
  return (
    <IonAccordionGroup expand="inset">
    {equipes.map((row : any) => (
      <IonAccordion value={row.idEquipe}>
        <IonItem slot="header" color="light">
          <IonLabel>{row.nomequipe} <label margin-left="100px">note:{row.note}</label> </IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            <p><label htmlFor=""><b>Competition : </b>{row.competition}</label></p>
            <p><label htmlFor=""><b>Buts : </b>{row.buts}</label></p>
            <p><label htmlFor=""><b>Tir : </b>{row.tirpm}</label></p>
            <p><label htmlFor=""><b>Buts : </b>{row.buts}</label></p>
            <p><label htmlFor=""><b>Jaune : </b>{row.jaune}</label></p>
            <p><label htmlFor=""><b>Possession : </b>{row.possession}</label></p>
            <p><label htmlFor=""><b>Passe Reussi : </b>{row.passeReussi}</label></p>
        </div> 
      </IonAccordion>
    ))}
    </IonAccordionGroup>
  );
}
export default ListeClub;