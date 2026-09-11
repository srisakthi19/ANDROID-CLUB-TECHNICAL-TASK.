import React, { useState } from 'react';

const CARDS = [
  { q: "How badly i want to be a part of android club?", a: "Sooo badlyyy" },
  { q: "how was my journey of these 6 days?", a: "I went from thinking react is a framework like django to understanding it is a library in javascript" },
  { q:"why did i make flashcards?", a:"I thought of making amazon clone or expenditure tracker but since i am a beginner with not much knowledge of react, I ended up doing flashcards."},
  { q:"how will i be a good choice for android club?", a:"As a fresher I have no prior knowledge but i have a deep down desire to build projects and develop technical skills."},
  { q:"what made me choose android club?", a:"Attended zero to commit workshop and wanted to be a part of android club events."},
  { q:"strengths?", a:"Questions everythings and quickly learn with deep understanding, and prompt in my works."}
  
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '300px', margin: '20px auto', textAlign: 'center' }}>
      <h3>Flashcard</h3>
      
      {/* Show question or answer based on showAnswer state */}
      <div style={{ height: '80px', margin: '20px 0', fontSize: '18px' }}>
        {showAnswer ? CARDS[index].a : CARDS[index].q}
      </div>

      {/* Buttons */}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Show Question' : 'Show Answer'}
      </button>
      
      <button onClick={() => { setIndex((index + 1) % CARDS.length); setShowAnswer(false); }} style={{ marginLeft: '10px' }}>
        Next
      </button>
    </div>
  );
}
