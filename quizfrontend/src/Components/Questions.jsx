import React, { useState } from 'react';
import Button from './Button';
import questions from './QuestionData';

const Questions = ({ isSubmitted, onSubmit }) => {
  const [selected, setSelected] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSelect = (questionId, option) => {
    setSelected((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="question-section flex flex-col w-1/2 border-2 p-4">
      {!isSubmitted ? (
        <>
          <div key={currentQuestion.id} className="mb-4">
            <p className="font-semibold">
              {currentQuestion.id}. {currentQuestion.question}
            </p>

            <div className="flex flex-col pl-4">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center cursor-pointer"
                  onClick={() => handleSelect(currentQuestion.id, option)}
                >
                  <input
                    type="radio"
                    id={`${currentQuestion.id}-${index}`}
                    name={`quest${currentQuestion.id}`}
                    value={option}
                    checked={selected[currentQuestion.id] === option}
                    readOnly
                  />
                  <label htmlFor={`${currentQuestion.id}-${index}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button label="Prev" onClick={handlePrev} disabled={currentIndex === 0} />
            <Button label="Next" onClick={handleNext} disabled={currentIndex === questions.length - 1} />
          </div>

          <div className="w-full flex justify-center mt-4">
            <Button label="Submit" onClick={onSubmit} disabled={currentIndex !== questions.length - 1} />
          </div>
        </>
      ) : (
        <div className="text-center text-2xl font-bold text-green-500">Quiz Submitted Successfully!</div>
      )}
    </div>
  );
};

export default Questions;
