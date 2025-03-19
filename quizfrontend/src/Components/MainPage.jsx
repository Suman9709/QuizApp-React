import React, { useState } from 'react';
import NavBar from './NavBar';
import Questions from './Questions';
import Timer from './Timer';
import QuestionTrack from './QuestionTrack';
import questions from './QuestionData';

const MainPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState({});

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log('Quiz Submitted');
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <div className="flex justify-center items-start mt-10 w-full gap-4 p-4">
        <div className="w-3/5 border-2 p-4 rounded-lg">
          {!isSubmitted && <Timer initialTime={360} onTimeUp={handleSubmit} />}
          <Questions 
            isSubmitted={isSubmitted}
            onSubmit={handleSubmit}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="w-2/5 border-2 p-4 rounded-lg">
          <QuestionTrack
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
