import React, { useState, useEffect } from "react";

const SpinningBoxText: React.FC = () => {
  const words = ["Organiza", "Prioriza", "Logra", "Crea"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex items-center justify-center min-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] p-4">
      <div className="text-black text-4xl sm:text-5xl md:text-6xl font-bold flex items-center space-x-4">
        <span>Con Planeo</span>
        <div className="relative w-40 sm:w-52 md:w-64 h-16 sm:h-20 md:h-24 overflow-hidden bg-blue-500 rounded-lg">
          <div
            className="absolute w-full h-full"
            style={{
              transform: `translateY(-${currentIndex * 100}%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {words.map((word, index) => (
              <div
                key={index}
                className="h-16 sm:h-20 md:h-24 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningBoxText;
