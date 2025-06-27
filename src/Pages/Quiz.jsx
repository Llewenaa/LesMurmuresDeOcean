import { useEffect, useState } from 'react'
import '../css/Quiz.css'

function Quiz({ score, setScore, numeroQuestions, setNumeroQuestions, setQuizFini }) {
  const [questions, setQuestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  
 

useEffect(() => {
  fetch('./src/assets/Question.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Mauvaise réponse du serveur ! 😞');
    }
    return response.json(); // ou .text() selon le cas
  })
  .then(data => {
    setQuestions(data.questions); // Assurez-vous que le JSON a une propriété "questions"
  })
  .catch(error => {
    console.error('Il y a eu une erreur ! 😱', error);
  });
}, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois, après le premier rendu du composant.

useEffect(() => {
  console.log('Questions mises à jour :', questions);
}, [questions]); // Cet effet se déclenche chaque fois que les questions sont mises à jour



function NextQuestion() {
  if (numeroQuestions < questions.length - 1) {
    setNumeroQuestions((prev) => prev + 1);
  } else {
    setShowPopup("C'est la dernière question !");
  }
  setShowPopup(false); // Ferme le popup après avoir cliqué sur "Ok".
}

const handleAnswer = (answer) => {
 
  if (answer === questions[numeroQuestions]?.correctAnswer) {
    setShowPopup("Bravo, bonne réponse ! 🎉");
    if (numeroQuestions === questions.length - 1) {
      setQuizFini(true); // Si c'est la dernière question, on marque le quiz comme fini.
      setShowPopup("Quiz terminé ! Ton score final est : " + (score) + " / " + questions.length);
      console.log("Quiz terminé avec un score de :", score + " / " + questions.length);
    }
 
    setScore((prevScore) => prevScore + 1); // Incrémente le score si la réponse est correcte.
    } else {
    setShowPopup("Mauvaise réponse !");
  } 
  
  };


    return (
     <main> 
     
    <div className="Quiz-title">
      <h1 className='titre'>Quiz</h1>
     
    </div> 
    <div className='question-container'>

    <h2 className='question'>{questions[numeroQuestions]?.question}</h2> 
    </div>

  
      
      {showPopup && (
      <div className="popup">
      <p className="popup-message">{showPopup}</p>
      <p className="explication">{questions[numeroQuestions]?.explication}</p>
      <button className="valide" onClick={() => NextQuestion()}>Ok</button>
      </div>
)}

      <div className="answers-grid">
        {questions[numeroQuestions]?.answers.map((answer, index) => (
          <button key={index} className="answer-button" onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>

      {/* {score > 0 && (
        <div className="score">Ton score : {score} / {questions.length}</div>
      )} */}

    </main>
  )
}

export default Quiz 
