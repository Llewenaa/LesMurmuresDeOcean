
import Quiz from './Pages/Quiz';
import PageScore from './Pages/PageScore'; // Assure-toi que ce fichier existe bien
import NavBar from './composants/NavBar';
import Footer from './composants/Footer';
import { useState } from 'react';
import questions from './assets/Question.json'; // Assurez-vous que le chemin est correct





function App() {
  const [score, setScore] = useState(0);
  const [numeroQuestions, setNumeroQuestions] = useState(0);
  const [quizFini, setQuizFini] = useState(false);

  return (
    <div>
      <NavBar />
      {quizFini ? (
        <PageScore score={score} totalQuestions={questions.length} />
      ) : (
        <Quiz score={score} setScore={setScore} numeroQuestions={numeroQuestions} setNumeroQuestions={setNumeroQuestions} setQuizFini={setQuizFini} />
      )}
      <Footer />
    </div>
  )
}

export default App;
