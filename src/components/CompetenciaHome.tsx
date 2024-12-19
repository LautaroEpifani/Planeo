import React, { useEffect, useRef, useState } from "react";
import { FaTrello,  FaSlack } from "react-icons/fa"; 
import { MdWork, MdHome, MdSettings } from "react-icons/md"; 
import { IoIosAlbums } from "react-icons/io"; 
import { HiOutlineChartBar } from "react-icons/hi"; 
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface LogoRolodexProps {
  items: React.ReactNode[]; 
}

const CompetenciaHome: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-16 px-4">
      <h2 className="text-4xl font-semibold text-white text-center mb-12">
        Descubre cómo planeamos superar a la competencia
      </h2>
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-blue-300 text-neutral-900">
            <FaTrello />
          </LogoItem>,
          <LogoItem key={3} className="bg-purple-300 text-neutral-900">
            <FaSlack />
          </LogoItem>,
          <LogoItem key={4} className="bg-yellow-300 text-neutral-900">
            <MdWork />
          </LogoItem>,
          <LogoItem key={5} className="bg-red-300 text-neutral-900">
            <MdHome />
          </LogoItem>,
          <LogoItem key={6} className="bg-indigo-300 text-neutral-900">
            <MdSettings />
          </LogoItem>,
          <LogoItem key={7} className="bg-pink-300 text-neutral-900">
            <IoIosAlbums />
          </LogoItem>,
          <LogoItem key={8} className="bg-teal-300 text-neutral-900">
            <HiOutlineChartBar />
          </LogoItem>,
        ]}
      />
      <div className="text-center text-white mt-8">
        <p>Tu experiencia de gestión de tareas puede ser más eficiente y adaptada a tus necesidades. ¡Estamos aquí para mejorar!</p>
        <button className="mt-4 bg-indigo-500 py-2 px-6 rounded-md text-white font-semibold hover:bg-indigo-600">
          ¡Descubre cómo!
        </button>
      </div>
    </section>
  );
};

// Tipamos las propiedades para el componente LogoItem
interface LogoItemProps {
  children: React.ReactNode; // Los hijos del componente LogoItem (iconos u otros elementos)
  className?: string; // La clase CSS opcional
}

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex: React.FC<LogoRolodexProps> = ({ items }) => {
  // Tipamos intervalRef con ReturnType<typeof setInterval>
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800 mx-auto"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem: React.FC<LogoItemProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CompetenciaHome;
