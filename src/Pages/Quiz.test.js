import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Quiz from './Quiz';








beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        questions: [
          {
            question: "Quelle est la capitale de la France ?",
            answers: ["Paris", "Lyon", "Marseille"],
            correctAnswer: "Paris",
            explication: "C’est la base voyons 🗼"
          }
        ]
      })
    })
  );
});

test('affiche une question et accepte une bonne réponse', async () => {
  const fakeSetScore = jest.fn();
  const fakeSetNumeroQuestions = jest.fn();
  const fakeSetQuizFini = jest.fn();

  render(
    <Quiz
      score={0}
      setScore={fakeSetScore}
      numeroQuestions={0}
      setNumeroQuestions={fakeSetNumeroQuestions}
      setQuizFini={fakeSetQuizFini}
    />
  );

  // On attend que la question s'affiche
  await waitFor(() => {
    expect(screen.getByText(/capitale de la France/i)).toBeInTheDocument();
  });

  // On clique sur la bonne réponse
  fireEvent.click(screen.getByText('Paris'));

  // On vérifie que le score a été augmenté
  expect(fakeSetScore).toHaveBeenCalled();
});

test('affiche une question et accepte une bonne réponse', async () => {
  const fakeSetScore = jest.fn();
  const fakeSetNumeroQuestions = jest.fn();
  const fakeSetQuizFini = jest.fn();

  render(
    <Quiz
      score={0}
      setScore={fakeSetScore}
      numeroQuestions={0}
      setNumeroQuestions={fakeSetNumeroQuestions}
      setQuizFini={fakeSetQuizFini}
    />
  );

  // On attend que la question s'affiche
  await waitFor(() => {
    expect(screen.getByText(/capitale de la France/i)).toBeInTheDocument();
  });

  // On clique sur la bonne réponse
  fireEvent.click(screen.getByText('Paris'));

  // On vérifie que le score a été augmenté
  expect(fakeSetScore).toHaveBeenCalled();
});

