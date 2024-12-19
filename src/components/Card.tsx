import { ReactNode } from 'react';

interface CardProps {
  bgColor: string;  
  icon?: ReactNode;  
  title: string;  
  description: string; 
}

function Card({ bgColor, icon, title, description}: CardProps) {
  return (
    <div className="bg-white mx-5 my-5 shadow-elevation-medium border-2 rounded-xl">
      <div className={`${bgColor} h-16 w-full rounded-t-xl relative`}>
        <div className="absolute -top-4 left-4 bg-white p-2 w-12 h-12 flex items-center justify-center rounded-md shadow-md">
          {icon}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl mb-2 font-semibold">{title}</h2>
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
}

export default Card;
