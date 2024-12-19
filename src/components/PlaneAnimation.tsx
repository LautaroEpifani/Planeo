import React from 'react';

const PlaneAnimation: React.FC = () => {
  return (
    <div className="bg-[#38bdf8] w-full h-[75vh] flex items-center justify-center">
      <svg
        viewBox="0 0 3387 1270"
        className="w-full max-w-[100vw] h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Línea blanca (trayectoria del avión) */}
        <path
          id="planePath"
          fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeDasharray="12,8"
          d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
        />
        {/* Elemento avión */}
        <g id="plane" transform="scale(0.8)">
          <polygon
            fill="#ffffff"
            points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57"
          />
          <polygon
            fill="#d1d5db"
            points="199,0 -141,-10 -163,63 -123,9"
          />
          <polygon
            fill="#9ca3af"
            points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41"
          />
          <path
            fill="#d1d5db"
            d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
          />
          <polygon
            fill="#ffffff"
            points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27"
          />
        </g>
        {/* Animación */}
        <animateMotion
          xlinkHref="#plane"
          dur="8s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#planePath" />
        </animateMotion>
      </svg>
    </div>
  );
};

export default PlaneAnimation;
