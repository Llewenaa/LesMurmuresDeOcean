import '../css/PageScore.css';
import { useState, useEffect } from 'react';

function PageScore({ score, totalQuestions }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (score === totalQuestions) {
      setMessage('Félicitations ! Vous avez obtenu un score parfait ! 🎉');
    } else if (score >= totalQuestions / 2) {
      setMessage('Bien joué ! Vous avez un bon score. 👍');
    } else {
      setMessage('Vous avez terminé le quiz, félicitations ! 😊');
    }
  }, [score, totalQuestions]);

  return (
    <>
      <img src="/src/assets/tortuePageFin.png" alt="tortue" className="tortue" />
      <div className="PageScore">
        <h1 className="Score-title">Votre Score</h1>
        <p className="Score-text">Vous avez répondu correctement à {score} questions !</p>
        <p className="Score-text">{message}</p>
       
      </div>
    </>
  );
}

export default PageScore;