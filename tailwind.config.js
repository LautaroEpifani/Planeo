/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/swiper/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(220deg, rgb(110, 22, 182) 0%, hsl(265deg 66% 44%) 6%, hsl(257deg 55% 48%) 12%, hsl(249deg 50% 52%) 18%, hsl(241deg 49% 57%) 24%, hsl(235deg 50% 59%) 29%, hsl(230deg 52% 59%) 35%, hsl(224deg 54% 60%) 41%, hsl(219deg 56% 61%) 47%, hsl(213deg 57% 62%) 53%, hsl(207, 58%, 63%) 59%, hsl(201deg 59% 65%) 65%, hsl(195deg 60% 67%) 71%, hsl(190deg 61% 68%) 76%, hsl(185deg 63% 70%) 82%, hsl(180deg 65% 72%) 88%, hsl(176deg 67% 74%) 94%, hsl(171deg 69% 76%) 100%)',
      },
      colors: {
        'custom-1': '#6e16b6',
        'custom-2': '#6426ba',
        'custom-3': '#5d37be',
        'custom-4': '#5a47c2',
        'custom-5': '#5d5cc7',
        'custom-6': '#626bcb',
        'custom-7': '#6072cd',
        'custom-8': '#627fd0',
        'custom-9': '#648bd3',
        'custom-10': '#6799d5',
        'custom-11': '#6aa6d7',
        'custom-12': '#71b6da',
        'custom-13': '#78c4dd',
        'custom-14': '#7ccfdf',
        'custom-15': '#82dbe3',
        'custom-16': '#89e6e6',
        'custom-17': '#90e9e3',
        'custom-18': '#98ecdf',
      },
      animation: {
        'spin-x': 'spin-x 10s linear infinite',
        'cloud-movement-slowest': 'cloud-movement 13.5s linear infinite',
        'cloud-movement-super-slow': 'cloud-movement 20.5s linear infinite',
        'cloud-movement-slow': 'cloud-movement 9.2s linear infinite',
        zigzag: 'zigzag 10s linear infinite',
        float: 'float 3s ease-in-out infinite',
        rotate: 'rotate 5s linear infinite',
        'logo-react': 'logo-react 6s ease-in-out infinite',
        'path-react': 'path-react 7s ease-in-out infinite',
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        'spin-x': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        'cloud-movement': {
          '0%': { transform: 'translateX(300px)', opacity: '0.1' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0' },
          '100%': { transform: 'translateX(-1000px)', opacity: '0' },
        },
        zigzag: {
          '0%': { transform: 'translateX(-100%) translateY(0)' },
          '25%': { transform: 'translateX(25vw) translateY(-50px)' },
          '50%': { transform: 'translateX(50vw) translateY(50px)' },
          '75%': { transform: 'translateX(75vw) translateY(-50px)' },
          '100%': { transform: 'translateX(150vw) translateY(50px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'logo-react': {
          '0%': { strokeDasharray: '0 100', strokeDashoffset: '100' },
          '100%': { strokeDasharray: '450 0', strokeDashoffset: '450' },
        },
        'path-react': {
          '0%': { fill: '#61DAFB' },
          '25%': { fill: 'transparent' },
          '60%': { fill: '#61DAFB' },
          '100%': { fill: '#61DAFB' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
