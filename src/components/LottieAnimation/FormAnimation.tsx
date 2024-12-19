import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FormAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto min-h-[200px] sm:min-h-[400px] lg:min-h-[600px]">
      <DotLottieReact
        src="https://lottie.host/96e000a9-b4c8-4c2f-a580-721a97782952/8dOZBSnI3S.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default FormAnimation;
