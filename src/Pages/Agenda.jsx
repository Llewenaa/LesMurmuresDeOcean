import React from 'react';
import '../css/Agenda.css';


const Agenda = () => {
    return ( 
    
        <main>
           
            <div className="background-image"></div>
            <h1 className="titleEspeces">Agenda des Activités Locales</h1>
<div>
            <br/>
            <br/>
             <img src="/src/assets/agendaEvent.png" alt="agenda des evenements" className="imgAgendaEvent" />
            
            <h2 className="Jour">Lundi:</h2>
            <br/>
            <br/>
            <p className="descriptionLundiM">
                <strong>10h00 – 12h00 - Atelier de sensibilisation scolaire  </strong>
                <br/><br/>
                <u>Public : </u><br/> Elèves des écoles locales 
                <br/><br/>
                <u>Lieu : </u><br/>Centre culturel maritime 
                <br/><br/>
                <u>Contenu :</u> <br/> Initiation à la biodiversité marine et aux impacts <br/>de la pollution
            </p>
            <br />
          <p className="descriptionLundiAP"><strong>14h00 – 16h00 - Nettoyage de plage</strong>
            <br/><br/>
             <u>Public :</u><br/> bénévoles de tous âges 
             <br/><br/> 
             <u>Lieu : </u><br/>Plage principale de la commune 
              <br/><br/> 
             <u>Objectif : </u><br/>Collecte des déchets plastiques et tri des matériaux recyclables
          </p>

          <h2 className="Jour2">Mardi:</h2>
          <br/><br/>
          <p className="descriptionMardiM">
            <strong>09h30 – 11h30 - Conférence sur les espèces marines locales </strong>
            <br/><br/>
            <u>Intervenant :<br/> </u>biologiste marin 
             <br/><br/>
            <u>Lieu : <br/></u>Salle municipale
             <br/><br/>
            <u>Thèmes :<br/></u> Espèces protégées, zones de reproduction, menaces actuelles
          </p>
            
            <p className="descriptionMardiAp">
             <strong> 15h00 – 17h00 : Formation au tri des déchets et compostage</strong>
             <br/><br/>
             <u>Public :<br/></u> habitants
             <br/><br/>
              <u>Lieu :</u> <br/>Maison de l’environnement
              <br/><br/>
              <u>But :</u> <br/>Réduire les déchets jetés en mer par une meilleure gestion domestique
            </p>
          
    </div>
</main>
)
};


export default Agenda;







