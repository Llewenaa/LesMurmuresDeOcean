import React from 'react';
import '../css/EspecesMenace.css'; 

const EspecesMenace = () => {
  return (
    <main className="especes-marine">
      <h1 className="titleEspeces">Espèces Marines Menacées</h1>
      
      <p className="descriptionEspeces">
        Le monde marin joue un rôle essentiel dans l'équilibre écologique de la planète. 
        Les océans produisent plus de la moitié de l'oxygène que nous respirons et 
        absorbent une grande partie du dioxyde de carbone, aidant ainsi à lutter contre le changement climatique. 
        Ils régulent le climat, nourrissent des milliards de personnes et abritent une biodiversité incroyable. 
        <br /><br />
        Cependant, la pollution, la surpêche et le réchauffement des eaux menacent cet équilibre. 
        Selon l'Union Internationale pour la Conservation de la Nature (UICN), 
        plus de 2 300 espèces marines sont actuellement en danger d'extinction. 
        La protection des espèces marines est cruciale pour préserver la biodiversité et les écosystèmes marins.
      </p>
      
      <br />
      <p className="title">Voici quelques espèces marines qui sont actuellement en danger :</p>
      
<br /><br/>

      <div className="especes-container">
        
        <img src="/src/assets/Vaquita.png" alt="Vaquita" className="imageEspeces" />
        
        <p className="vaquita-description">
          <bold className="vaquita"> Vaquita (Phocoena sinus)</bold>
          
          <br/><br/>
          
          Statut: en danger critique. 
          <br />
          <br />
          Population restante: moins de 20 individus dans le golfe de Californie, <br/> ce qui en fait le mammifère
marin le plus menacé au monde. 
<br />
<br />
Menaces: captures accidentelles dans les filets illégaux destinés à la pêche de la totoaba.</p>
        </div>
      
      <div className="especes-container">
        <img src="/src/assets/Tortue-imbrique.png" alt="TortueImbrique" className="imageEspeces" />
        <p className="tortue-description"> 
          
          <bold className="tortueImbrique">Tortue imbriquée (Hawksbill Turtle)</bold>
          
          <br/><br/>

          Statut: en danger critique. 
          <br />
          <br />
          Population restante: environ 20 000 à 30 000 individus. 
          <br />
          <br />
          Menaces: braconnage pour leurs carapaces, destruction de leur habitat de nidification <br/>et pollution des océans.</p>

</div>

      <div className="especes-container">
        <img src="/src/assets/Tortue-Luth.png" alt="TortueLuth" className="imageEspeces" />
        <p className="tortue-luth-description">
          
          <bold className="tortueLuth">Tortue luth (Leatherback Turtle, Dermochelys coriacea)</bold>
          
          <br/><br/>

          Statut: vulnérable globalement, mais certaines sous-populations sont en danger critique.
<br />
<br />
Effectif estimé: perte de 70% de la population au cours des 15 dernières années <br/>dans 
certaines zones.
<br /><br />
Menaces: collecte d’oeufs, captures accidentelles, collisions avec bâteaux, pollution plastique. </p>
      </div>

      <div className="especes-container">
        <img src="/src/assets/Baleine-Bleue.png" alt="BaleineBleu" className="imageEspeces" />
        <p className="baleine-bleue-description">
          
          <bold className="baleineBleue">Baleine bleue (Blue Whale, Balaenoptera musculus)</bold>
          

          <br/><br/>
          
          Statut: en danger.
<br />
<br />
Effectif estimé: entre 10 000 et 25 000 individus. 
<br />
<br />
Menaces: chasse commerciale historique, bruits sous-marins, collisions avec navires,<br/> 
réchauffement planétaire. </p>
          
      </div>

      <div className="especes-container">
        <img src="/src/assets/Requin-Baleine.png" alt="RequinBaleine" className="imageEspeces" />
        <p className="requin-baleine-description">
          
          <bold className="requinBaleine">Requin-baleine (Whale Shorak, Rhincodon typus)</bold>
          
          <br/><br/>
          
          Statut: en danger, selon l’UICN.
<br />
<br />
Menaces: pêche non régulées (viande, ailerons), captures accidentelles, <br/>collisions avec bâteaux, 
tourisme non maîtrisé. 
       </p>
       </div>
     
    </main>
  );
}

export default EspecesMenace;
