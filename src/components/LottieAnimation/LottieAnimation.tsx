import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto min-h-[200px] sm:min-h-[400px] lg:min-h-[600px]">
      <DotLottieReact
        src="https://lottie.host/7b2ab80f-e299-4d08-a94e-42451a91e46a/yf8gNFI1Uo.lottie"
        loop
        autoplay
        style={{ width: '70%', height: '70%' }}
      />
    </div>
  );
};

export default LottieAnimation;
