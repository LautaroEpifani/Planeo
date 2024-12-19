import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeaderFormAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto min-h-[100px] sm:min-h-[150px] lg:min-h-[180px]">
      <DotLottieReact
        src="https://lottie.host/25b581be-0123-4ed4-bd3f-edbe8f37707c/oj5DfT1bN7.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HeaderFormAnimation;
