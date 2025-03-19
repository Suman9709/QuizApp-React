import React, { useState } from 'react';
import NavBar from './NavBar';
import Questions from './Questions';
import Timer from './Timer';

const MainPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log('Quiz Submitted');
  };

  return (
    <div className="w-screen h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        {!isSubmitted && <Timer initialTime={120} onTimeUp={handleSubmit} />}
        <Questions isSubmitted={isSubmitted} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default MainPage;
