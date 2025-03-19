import React from "react";

const QuestionTrack = ({ questions = [], currentIndex, setCurrentIndex, selected = {} }) => {
  return (
    <div className="grid grid-cols-8  justify-center gap-2 p-2">
      {questions.length > 0 ? ( 
        questions.map((question, index) => {
          const isAnswered = selected[question?.id] !== undefined;

          return (
            <button
              key={index}
              className={`w-12 h-12 flex items-center justify-center border-2 rounded-md text-white font-bold transition 
                ${currentIndex === index ? "bg-blue-500 border-blue-700" : isAnswered ? "bg-green-500 border-green-700" : "bg-gray-500 border-gray-700"}
                hover:bg-yellow-500`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to question ${index + 1}`}
            >
              {index + 1}
            </button>
          );
        })
      ) : (
        <p className="text-red-500">No questions available</p> 
      )}
    </div>
  );
};

export default QuestionTrack;
