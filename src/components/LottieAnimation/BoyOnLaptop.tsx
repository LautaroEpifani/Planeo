import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BoyOnLaptop: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto min-h-[200px] sm:min-h-[400px] lg:min-h-[600px]">
      <DotLottieReact
        src="https://lottie.host/4e91abba-edd5-4160-8123-45db6fcea751/8CPJ9pomes.lottie"
        loop
        autoplay
        style={{ width: '80%', height: '80%' }}
      />
    </div>
  );
};

export default BoyOnLaptop;
