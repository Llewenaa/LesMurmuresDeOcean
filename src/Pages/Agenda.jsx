import React from 'react';
import '../CSS/EspecesMenace.css';

const Agenda = () => {
    return (
        <main className="agenda">
            <div className="background-image"></div>
            <h1 className="titleEspeces">Agenda des Événements Marins</h1>
            <p className="descriptionEspeces">
                Découvrez les événements marins à venir qui mettent en lumière la conservation des océans et la protection des espèces marines.
            </p>
            <br />
            <div className="event-container">
                <h2>Nettoyage des Plages</h2>
                <p>Date: 15 Mars 2024</p>
                <p>Lieu: Plage de la Côte d'Azur</p>
                <p>Description: Joignez-vous à nous pour un nettoyage collectif des plages afin de préserver notre environnement marin.</p>
            </div>
            <div className="event-container">
                <h2>Conférence sur la Biodiversité Marine</h2>
                <p>Date: 22 Avril 2024</p>
                <p>Lieu: Auditorium du Musée Océanographique</p>
</div>
</main>
)
};


export default Agenda;







